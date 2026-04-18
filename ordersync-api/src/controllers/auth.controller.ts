import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const users: any[] = []; // luego DB

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = { id: Date.now(), email, password: hashed };
  users.push(user);

  res.json({ message: "User created" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  res.json({ token });
};