import mongoose from 'mongoose';
const Schema= mongoose.Schema;
const ObjectId= mongoose.Types.ObjectId;

const userSchema= new Schema({
    username:{type:String , required:true, unique:true},
    password:{type:String , required:true,}
})
export const userModel= mongoose.model('User',userSchema);


const tagSchema= new Schema({
    title:{type:String, required:true}
})
export const tagModel= mongoose.model('Tag',tagSchema);


const contentType= ['twitter', 'youtube']
const contentSchema= new Schema({
link:{type:String, required:true},
type:{type:String, enum:contentType, required:true},
title:{type:String, required:true},
tags:[{type:ObjectId, ref:'Tag'}],
userId:{type:ObjectId, ref:'User', required:true}
})
export const contentModel= mongoose.model('Content',contentSchema);


const linkSchema= new Schema({
    hash:{type:String, required:true},
    userId:{type:ObjectId, ref:'User', required:true, unique:true}
})
export const linkModel= mongoose.model('Link',linkSchema);

