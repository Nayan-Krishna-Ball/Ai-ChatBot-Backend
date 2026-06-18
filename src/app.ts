//
import cookieParser from "cookie-parser";
import cors from "cors";
// import { config } from "dotenv";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import appRouter from "./routes/index.js";
dotenv.config();

// config();
const app = express();

//middlewares

// ❌ OLD CODE (localhost only - does not work in production)
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// ✅ NEW CODE (production-safe for Render + Vercel)
// Render dashboard-এ FRONTEND_URL = your Vercel URL দিতে হবে
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
