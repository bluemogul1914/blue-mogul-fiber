// HubSpot Integration for Blue Mogul Fiber
import { Client } from '@hubspot/api-client';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=hubspot',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('HubSpot not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableHubSpotClient() {
  const accessToken = await getAccessToken();
  return new Client({ accessToken });
}

export interface HubSpotContactData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message?: string;
  type: string;
  planInterest?: string;
}

export async function createHubSpotContact(data: HubSpotContactData) {
  const client = await getUncachableHubSpotClient();
  
  // Split name into first and last
  const nameParts = data.name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const properties: Record<string, string> = {
    firstname: firstName,
    lastname: lastName,
    email: data.email,
    phone: data.phone,
  };

  // Add optional fields if they have values
  if (data.address) {
    properties.address = data.address;
  }
  
  if (data.message) {
    properties.message = data.message;
  }

  // Add custom properties for lead tracking
  properties.hs_lead_status = 'NEW';
  
  // Store plan interest and type in notes or custom field
  if (data.planInterest || data.type) {
    properties.notes = `Type: ${data.type}${data.planInterest ? `, Plan Interest: ${data.planInterest}` : ''}`;
  }

  try {
    const response = await client.crm.contacts.basicApi.create({
      properties,
      associations: []
    });
    return response;
  } catch (error: any) {
    // If contact already exists, try to update instead
    if (error.code === 409) {
      // Search for existing contact by email
      const searchResponse = await client.crm.contacts.searchApi.doSearch({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: 'EQ',
            value: data.email
          }]
        }],
        properties: ['email'],
        limit: 1,
        after: "0",
        sorts: []
      });
      
      if (searchResponse.results.length > 0) {
        const existingContactId = searchResponse.results[0].id;
        return await client.crm.contacts.basicApi.update(existingContactId, { properties });
      }
    }
    throw error;
  }
}
