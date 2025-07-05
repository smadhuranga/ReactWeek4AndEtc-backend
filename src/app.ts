/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */
import express, {Express, Request, Response} from "express";
import productRouter from "./routes/product.route";



// 1. initialization the express app
let app : Express = express();


// 2. Define Middlewares
//Instruct to parse the Request
//payload data to be converted
// to JSON format
app.use(express.json());
app.use("/api/products", productRouter)


app.use("/api/products")

// 3. Define a simple HTTP get request
// app.get('/', (req : Request, res : Response) => {
//     console.log(req.body)
//     res.send("Hello World!");
// });

export default app