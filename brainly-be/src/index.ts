import express from "express";
import mongoose from "mongoose";
import {router} from './routes'
import cors from 'cors'
import dotenv from 'dotenv';


const app= express();

app.use(express.json());
app.use(cors())

app.use("/api/v1",router)

async function main(){
await mongoose.connect("mongodb+srv://sanjana:ex9D2MaCvp5ntU03@cluster0.4gjotso.mongodb.net/brainly")
console.log("connected to mongoDB")
app.listen(process.env.port || 3000);
console.log("Listening on port 3000")
}

main();