import { NextFunction, Request, Response } from "express"
import jwt,{JwtPayload} from 'jsonwebtoken';
import {JWT_KEY} from './config'


export const userMiddleware=(req:Request, res:Response, next:NextFunction)=>{
const token= req.headers.token;
try{
    const verifiedUser= jwt.verify(token as string,JWT_KEY) as JwtPayload
console.log(verifiedUser)
if(verifiedUser)
{
    req.userId=verifiedUser.userId 
    next();
}
else{
    res.status(403).json({
        message:"You are not signed in"
    })
}
}
catch(e){
    res.status(403).json({
        message:"You are not signed in",
        error:e
    })
}
}