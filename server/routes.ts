import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { createHubSpotContact } from "./hubspot";
import uispRouter from "./routes/uisp";
import chatRouter from "./routes/chat";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Use UISP router for lead creation
  app.use(uispRouter);

  // Use chat router for AI chatbot
  app.use(chatRouter);
  
  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      
      // Save to database
      const contact = await storage.createContact(input);
      
      // Also send to HubSpot CRM
      try {
        await createHubSpotContact({
          name: input.name,
          email: input.email,
          phone: input.phone,
          address: input.address || undefined,
          message: input.message || undefined,
          type: input.type,
          planInterest: input.planInterest || undefined,
        });
      } catch (hubspotError) {
        // Log the error but don't fail the request - contact is already saved locally
        console.error('HubSpot sync error:', hubspotError);
      }
      
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
