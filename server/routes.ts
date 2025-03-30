import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes if needed would go here
  // prefix all routes with /api

  // Language routes
  app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
