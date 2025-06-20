import { Request } from "express";
import mongoose from "mongoose";
const ObjectId= mongoose.Types.ObjectId;


declare module 'express-serve-static-core' {
    interface Request {
      userId: String;
    }
  }
