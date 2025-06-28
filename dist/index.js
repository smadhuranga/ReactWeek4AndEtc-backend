"use strict";
/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 1. initialization the express app
let app = (0, express_1.default)();
// 2.Define port
const port = 3000;
// 3. Define a simple HTTP get request
app.get('/', (req, res) => {
    res.send("Hello World!");
});
// 4. start the server (Instructs the app to listen on the specified port)
//listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
