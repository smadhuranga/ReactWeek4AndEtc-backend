/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */


import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";
import {debuglog} from "node:util";
dotenv.config(); // Load environment variables from .env file

DBConnection().then(result => console.log(result));

// 2.Define port
const port = process.env.PORT || 3000; // Get the port number from environment variable



// 4. start the server (Instructs the app to listen on the specified port)
//listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});