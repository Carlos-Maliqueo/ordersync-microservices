import { Request, Response } from "express";
import { processPayment } from "../services/payment.service"

let orders: any[] = [];

export const createOrder = async (req: Request, res: Response) => {
  try{
    const order = {
      id: Date.now(),
      userId: (req as any).user.id,
      status: "pending",
      amount: req.body.amount
    };

    orders.push(order);
    // llamada a .NET
    const payment = await processPayment(order.id, order.amount);
    
    order.status = payment.status;

    res.json({ order, payment});
  }
  catch(error){
    res.status(500).json({ message: "Error creating order" });
  }
  
};

export const getOrders = (req: Request, res: Response) => {
  res.json(orders);
};