/**
 * @author supunmadhuranga
 * @created 2025-07-05
 * @project computer-shop-backend
 * @description
 */
import {Request, Response} from "express";
import * as productService from "../services/product.service";


// Controller function to handle get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Something went wrong"});
    }

}

export const saveProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = req.body;
        const validationError =  productService.validateProduct(newProduct);
        if (validationError) {
            res.status(400).json({error: validationError});
            return;
        }
        const savedProduct = await productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Something went wrong"});
    }


}

export const getProducts = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
        res.status(400).json({
            error: "Invalid product id"
        });
        return;
    }
    const product = await productService.getProductById(productId);
    if (!product) {
        res.status(404).json({
            error: "Product not found"
        });
        return;
    }
    res.status(200).json(product);
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        if(isNaN(productId)) {
            res.status(400).json({ error: 'Invalid product ID' });
            return;
        }
        const updatedProduct = req.body;
        const validateError = productService.validateProduct(updatedProduct);
        if (validateError) {
            res.status(400).json({ error: validateError });
            return;
        }
        const product = await productService.updateProduct(productId, updatedProduct);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }


}

export const deleteProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
        res.status(400).json({
            error: "Invalid product id"
        });
        return;
    }
    const deleted =await productService.deleteProduct(productId);
    if (!deleted) {
        res.status(404).json({
            error: "Product not found"
        });
        return;
    }
    res.status(200).json({
        message: "Product deleted successfully"
    });

}

