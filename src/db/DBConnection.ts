/**
 * @author supunmadhuranga
 * @created 2025-07-12
 * @project computer-shop-backend
 * @description
 */


import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const MONGODB_DB_URL = process.env.MONGO_DB_URL as string;
const DBConnection = async () => {
    try {
        const connection = await mongoose.connect(MONGODB_DB_URL);
        return `Successfully connected to MongoDB: ${connection.connection.host}`
    } catch (error) {
       return "MongoDB connection error" + error;
    }



}

export default DBConnection;


