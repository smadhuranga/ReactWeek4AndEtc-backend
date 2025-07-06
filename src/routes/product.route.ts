/**
 * @author supunmadhuranga
 * @created 2025-07-05
 * @project computer-shop-backend
 * @description
 */

import { Router } from "express";
import {
    deleteProduct,
    getAllProducts,
    getProducts,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";

const productRouter:Router = Router();
// Handle request
productRouter.get("/all", getAllProducts);
productRouter.post("/save", saveProduct);
productRouter.get("/:id", getProducts)
productRouter.put("/update/:id", updateProduct)
productRouter.delete("/delete/:id", deleteProduct)

export default productRouter