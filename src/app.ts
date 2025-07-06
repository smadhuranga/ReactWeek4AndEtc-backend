/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */
import express, {Express, Request, Response} from "express";
import productRouter from "./routes/product.route";
import cors from "cors";
import {all} from "axios";



// 1. initialization the express app
let app : Express = express();


// 2. Define Middlewares
//Instruct to parse the Request
//payload data to be converted
// to JSON format
app.use(express.json());
const allowedOrigins = ["http://localhost:3000"];
// app.use(cors()); // Enable CORS
const corsOptions = (origin: string | undefined, callback: (err: Error | null, allow?: boolean)=>void) =>  {
    if(!origin|| allowedOrigins.includes(origin) ) {
        callback(null, true);
    } else {
        callback(new Error("Not allowed by CORS"));
    }
}

app.use("/api/products", productRouter)


app.use("/api/products")

// 3. Define a simple HTTP get request
// app.get('/', (req : Request, res : Response) => {
//     console.log(req.body)
//     res.send("Hello World!");
// });

export default app