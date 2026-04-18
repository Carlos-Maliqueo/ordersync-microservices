import { Router } from "express";

const router = Router();

router.post("/payment", (req, res) => {
  console.log("📩 Webhook recibido:", req.body);

  // aquí actualizarías la orden en DB
  // por ahora solo log

  res.json({ received: true });
});

export default router;