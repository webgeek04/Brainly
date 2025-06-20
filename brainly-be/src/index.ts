import express from "express";
import mongoose from "mongoose";
import {router} from './routes'
import cors from 'cors'
import dotenv from 'dotenv';
import { MONGO_DB } from "./config";
dotenv.config();

const app= express();

app.use(express.json());
app.use(cors())

app.use("/api/v1",router)

async function main(){
await mongoose.connect(MONGO_DB)
console.log("connected to mongoDB")
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

main();