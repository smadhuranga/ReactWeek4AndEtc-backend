/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */

import express, {Express , Request , Response} from "express";

// 1. initialization the express app
let app : Express = express();
// 2.Define port
const port = 3000;

// 3. Define a simple HTTP get request
app.get('/', (req : Request, res : Response) => {
  res.send("Hello World!");
});

// 4. start the server (Instructs the app to listen on the specified port)
//listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});