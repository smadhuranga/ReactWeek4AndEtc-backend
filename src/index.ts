/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */

import express, {Express , Request , Response} from "express";

// 1. initialization the express app
let app : Express = express();
// Define port
const port = 3000;

// 2. listen to port
app.get('/', (req : Request, res : Response) => {
  res.send("Hello World!");
});
