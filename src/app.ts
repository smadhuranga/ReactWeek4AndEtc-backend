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

// 1. Initialize the express app
let app: Express = express();

// 2. Define Middlewares
app.use(express.json());

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173", // Add Vite default port
    "http://127.0.0.1:3000",
    "https://your-frontend-domain.com" // Add your production domain
];

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('Blocked by CORS:', origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // Allow cookies/sessions
    optionsSuccessStatus: 200 // Legacy browser support
};

app.use(cors(corsOptions));

app.use(cors(corsOptions)); // Enable CORS with options

// Product routes
app.use("/api/products", productRouter);

// Contact routes
app.use("/api/contacts", contactRouter);

// Remove this invalid line: app.use("/api/products")

export default app;