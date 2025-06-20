import { Router, Request, Response } from "express";
import {z} from 'zod';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { contentModel, linkModel, userModel } from "./db";
import {JWT_KEY} from './config'
import { userMiddleware } from "./middleware";
import { random } from "./utils";

const router= Router();

router.post("/signup", async (req : Request, res : Response)=>{
    const username= req.body.username;
    const password= req.body.password;

    const requiredBody= z.object({
        username: z.string()
        .min(3,{message:"Username should be atleast 3 characters long"})
        .max(10,{message:"Username must be at most 10 characters long"}),
        password: z.string()
        .min(6,{message:"Password should be at least 6 characters long"})
        .max(20,{message:"Password must be at most 20 characters long"})
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}),
    })
    
    const parsedData= requiredBody.safeParse(req.body);
    if(!parsedData.success)
    {
        res.status(411).json({
            message:"Wrong Input",
            error:parsedData.error
        })
        return;
    }

    
    const hashedPassword= await bcrypt.hash(password,5)

    try{
        await userModel.create({
            username,
            password:hashedPassword
        })
        res.status(200).json({
            message:"Signed up successfully"
        })
    }
    catch(e){
        res.status(403).json({
            message:"foundUser already exists"
        })
    }

})

router.post("/signin",async (req : Request, res : Response)=>{
    const username= req.body.username;
    const password= req.body.password;
    try{
        const foundUser = await userModel.findOne({
            username:username
        })
        if(foundUser)
        {
            const matchedPassword = await bcrypt.compare(password, foundUser.password)
            if(matchedPassword)
            {
                const token= jwt.sign({userId: foundUser._id},JWT_KEY)
                res.status(200).json({
                    message:"Signed in successfully",
                    token:token
                })
            }
            else{
                res.status(403).json({
                    message:"Invalid Credentials"
                })
                return;
            }
        }
        else
        {
            res.status(403).json({
                message:"User does not exist"
            })
            return;
        }
    }
    catch(e){
        res.status(500).json({
            message:"Internal server error"
        })
    }
})

router.post("/content",userMiddleware, async (req : Request,res : Response)=>{
const {link, type, title}= req.body;

//try adding zod here as well

try{
await contentModel.create({
    title,
    link,
    type,
    userId:req.userId,
    tags:[]
})
res.json({
    message:"Content added successfully"
})
}
catch(e){
    res.json({
        error:e
    }) 
}
})

router.get("/content",userMiddleware, async(req : Request, res : Response)=>{
const userId= req.userId
try{
    const content= await contentModel.find({
        userId:userId
    }).populate("userId","username")
    
    res.json({
        message:content
    })
}
catch(e){
    res.status(500).json({
        error:e
    })
}
})

router.delete("/content/:contentId",userMiddleware,async(req : Request, res : Response)=>{
    const contentId= req.params.contentId
    const userId= req.userId
    try{
        const deletedContent = await contentModel.deleteOne({
            _id: contentId,
            userId:userId
        })
        if(deletedContent.deletedCount===0)
        {
            res.status(403).json({
                message:"No matching content found or you are not authorized"
            })
            return;
        }
            res.json({
                message:"Content deleted successfully"
            })
        
    }
    catch(e){
        res.status(500).json({
            message: "Internal server error",
            error: e
        });
    }
})

router.post("/brain/share",userMiddleware,async(req : Request, res : Response)=>{
const share= req.body.share
const userId=req.userId
if(share)
{
    const foundLink= await linkModel.findOne({
        userId
    })

if (foundLink) {
    res.json({
        hash: foundLink.hash
    })
    return;
}
    const hash = random(10);
     await linkModel.create({
         userId,
         hash: hash
    })
    res.json({
      hash
    })
 
}
else
{
    const deletedLink=await linkModel.deleteOne({
        userId
    })
    if(deletedLink.deletedCount===0)
        {
            res.status(403).json({
                message:"Shreable Link doesnot exist"
            })
            return;
        }
    res.json({
        message: "Removed link"
    })
}
})

router.get("/brain/:sharelink", async(req : Request, res : Response)=>{
const hash= req.params.sharelink
try{
    const foundLink= await linkModel.findOne({
        hash
    })
    if(!foundLink)
    {
        res.status(404).json({
            message:"Brain Link Not Found"
        })
        return;
    }
    const content= await contentModel.find({
        userId:foundLink.userId
    }).populate("userId","username")

    const name = (content[0]?.userId as { username: string })?.username;
    res.status(200).json({
        name,
        content
    })

}
catch(e)
{
    res.status(500).json({
        error:e
    })

}
    })


export {router};
