import dotenv from "dotenv";
dotenv.config();

if (!process.env.JWT_KEY || !process.env.MONGO_DB) {
    throw new Error("Missing environment variables: JWT_KEY or MONGO_DB");
}

export const JWT_KEY = process.env.JWT_KEY
export const MONGO_DB = process.env.MONGO_DB
