/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */
import express, {Express, Request, Response} from "express";


// 1. initialization the express app
let app : Express = express();

// 3. Define a simple HTTP get request
app.get('/', (req : Request, res : Response) => {
    res.send("Hello World!");
});

export default app