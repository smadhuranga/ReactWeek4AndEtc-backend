/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */
import express, { Express, Request, Response } from "express";
import productRouter from "./routes/product.route";
import contactRouter from "./routes/contact.route"; // Import contact router
import cors from "cors";

// 1. initialization the express app
let app: Express = express();

// 2. Define Middlewares
// Instruct to parse the Request payload data to be converted to JSON format
app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use(cors(corsOptions)); // Enable CORS with options

// Product routes
app.use("/api/products", productRouter);

// Contact routes
app.use("/api/contacts", contactRouter);

// Remove this invalid line: app.use("/api/products")

export default app;