import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes if needed would go here
  // prefix all routes with /api

  // Language routes
  app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

  // Privacy policy routes
  app.get(['/eng/privacy-policy', '/politique-confidentialite'], (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
