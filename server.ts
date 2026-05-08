import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Mock WHMCS API endpoints / Proxy
  app.get("/api/check-domain", (req, res) => {
    const { domain } = req.query;
    // Simulate domain availability check
    const isAvailable = Math.random() > 0.3;
    res.json({ domain, available: isAvailable, price: isAvailable ? 1200 : null });
  });

  // bKash / Nagad payment initiation dummy
  app.post("/api/payments/initiate", (req, res) => {
    const { amount, method, orderId } = req.body;
    res.json({
      success: true,
      paymentUrl: `https://mock-payment-gateway.com/pay?method=${method}&amount=${amount}&ref=${orderId}`
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BengalHost Server running on http://localhost:${PORT}`);
  });
}

startServer();
