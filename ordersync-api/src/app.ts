import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import orderRoutes from "./routes/order.routes";
import webhookRoutes from "./routes/webhook.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/webhook", webhookRoutes);


app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

export default app;