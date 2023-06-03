
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const express=require("express")
const { UserModel } = require("../model/user.model")

const userRouer=express.Router()

userRouer.post("/signup",(req,res)=>{
    const {email,pass,cPass}=req.body
    if(pass==cPass){
    
        try{
     bcrypt.hash(pass,5,async(err,hash)=>{
        if(err){
            res.send("user regi failed")
        }else{
            const user= new UserModel({email,pass:hash,cPass:hash})
            await user.save()
            res.send("user singup success")
        }
     })
        }
        catch(e){
            res.send(e.message)
        }
    }else{
        res.send("pass not match with cpass")
    }
})

// login 

userRouer.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try{
   const user= await UserModel.find({email})
   if(user.length>0){
    bcrypt.compare(pass,user[0].pass,(err,result)=>{
        if(result){
            let token=jwt.sign({userId:user[0]._id},"masai")
            res.send({msg:"user login successful",token:token})
        }else{
            res.send("user login failed")
        }
    })

   }else{
    res.send("invalid credentials")
   }
    }
    catch(e){
        res.send("user login failed")
    }
})

module.exports={
    userRouer
}