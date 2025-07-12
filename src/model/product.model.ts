/**
 * @author supunmadhuranga
 * @created 2025-07-05
 * @project computer-shop-backend
 * @description
 */

// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     currency: string;
//     image: string;
// }

import mongoose from "mongoose";

const product = new mongoose.Schema(
    {
        "id": {
            required: true, // like not null
            type: Number,
            unique: true, // Unique key constraint
            index: true // for better performance
        },
        "name": {
            required: true,
            type: String
        },
        "price": {
            required: true,
            type: Number
        },
        "currency": {
            required: true,
            type: String
        },
        "image": {
            required: true,
            type: String
        }
    }
)
const Product = mongoose.model("Product", product);
export default Product
