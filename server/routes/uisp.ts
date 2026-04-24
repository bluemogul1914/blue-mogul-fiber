import { Router, Request, Response } from 'express';

const router = Router();

// UISP Lead Creation Endpoint
router.post('/api/create-lead', async (req: Request, res: Response) => {
  try {
    // Get environment variables
    const UISP_API_KEY = process.env.UISP_API_KEY;
    const UISP_URL = process.env.UISP_URL || 'https://uisp.bluemogul.us';
    const LEAD_SOURCE_ID = parseInt(process.env.LEAD_SOURCE_ID || '1');

    // Validate API key
    if (!UISP_API_KEY) {
      console.error('Missing UISP_API_KEY in environment');
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error' 
      });
    }

    // Get form data from request body
    const { fullName, phone, email, address, plan } = req.body;

    // Validate required fields
    if (!fullName || !phone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: fullName and phone' 
      });
    }

    // Parse name
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || 'Unknown';

    // Clean phone number (remove all non-digits)
    const cleanPhone = phone.replace(/\D/g, '');

    // Parse address
    const addressParts = address?.split(',').map((s: string) => s.trim()) || [];
    const street = addressParts[0] || address || '';
    const city = addressParts[1] || 'Houston';
    const stateZip = addressParts[2] || 'TX 77001';
    
    // Extract state and zip
    const stateZipMatch = stateZip.match(/([A-Z]{2})\s*(\d{5})/);
    const state = stateZipMatch?.[1] || 'TX';
    const zip = stateZipMatch?.[2] || '';

    // Build note
    let note = `Lead from website form\n`;
    if (plan) note += `Interested in: ${plan}\n`;
    if (email) note += `Email: ${email}\n`;
    note += `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}`;

    // Prepare UISP payload
    const leadPayload = {
      firstName,
      lastName,
      phoneNumber: cleanPhone,
      email: email || null,
      street1: street,
      city,
      state,
      zipCode: zip,
      countryId: 249, // USA
      leadSourceId: LEAD_SOURCE_ID,
      note
    };

    console.log('Creating UISP lead:', leadPayload);

    // Call UISP API
    const uispResponse = await fetch(`${UISP_URL}/api/v1.0/clients/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-App-Key': UISP_API_KEY
      },
      body: JSON.stringify(leadPayload)
    });

    // Check response
    if (!uispResponse.ok) {
      const errorText = await uispResponse.text();
      console.error('UISP API error:', uispResponse.status, errorText);
      
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to create lead in UISP',
        details: errorText.substring(0, 200)
      });
    }

    // Parse success response
    const leadData = await uispResponse.json();
    const leadId = leadData.id;

    console.log('✅ Lead created successfully:', leadId);

    return res.status(200).json({ 
      success: true, 
      leadId,
      message: 'Lead created! We\'ll call you within 30 minutes.' 
    });

  } catch (error: any) {
    console.error('Error creating lead:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message 
    });
  }
});


// Frontier ASR Pre-Order Endpoint
router.post('/api/check-availability', async (req: Request, res: Response) => {
  const PLUGIN_URL = process.env.FRONTIER_PLUGIN_URL ||
    'https://uisp.bluemogul.us/crm/_plugins/frontier-asr/public.php';

  try {
    const { name, phone, email, address, plan } = req.body;

    // Parse address string "123 Main St, Houston, TX 77001"
    let address_line1 = address || '';
    let city = '';
    let state = 'TX';
    let zip = '';

    const addrMatch = address?.match(/^(.+),\s*([^,]+),\s*([A-Z]{2})\s*(\d{5})?/);
    if (addrMatch) {
      address_line1 = addrMatch[1].trim();
      city          = addrMatch[2].trim();
      state         = addrMatch[3].trim();
      zip           = addrMatch[4]?.trim() || '';
    }

    console.log('Sending Frontier ASR pre-order for:', name, address);

    const pluginRes = await fetch(`${PLUGIN_URL}?action=send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type:          'PRE-ORDER',
        address_line1,
        city,
        state,
        zip,
        contact_name:  name  || 'Web Inquiry',
        contact_phone: phone || '',
        contact_email: email || '',
        notes:         plan  ? `Interested plan: ${plan}` : '',
        source:        'fiber.bluemogul.biz',
      }),
    });

    const result = await pluginRes.json();
    console.log('Frontier ASR response:', result);

    return res.json({
      success: result.success,
      pon:     result.pon || null,
      message: result.success
        ? "We received your request! A Blue Mogul rep will contact you within 1 business day."
        : "Unable to check availability right now. Please call (346) 309-5514.",
    });

  } catch (err: any) {
    console.error('[check-availability]', err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please call (346) 309-5514.',
    });
  }
});

export default router;
