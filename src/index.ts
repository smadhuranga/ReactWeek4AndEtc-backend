/**
 * @author supunmadhuranga
 * @created 2025-06-28
 * @project computer-shop-backend
 * @description
 */


import app from "./app";

// 2.Define port
const port = 3000;



// 4. start the server (Instructs the app to listen on the specified port)
//listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});