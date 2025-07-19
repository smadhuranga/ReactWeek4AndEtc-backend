/**
 * @author supunmadhuranga
 * @created 2025-07-12
 * @project computer-shop-backend
 * @description
 */
import {Router} from "express";
import {authenticateUser} from "../controllers/auth.controller";


const authRouter:Router = Router();


authRouter.post("/login", authenticateUser)

export default authRouter;