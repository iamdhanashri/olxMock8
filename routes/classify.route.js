

const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const express=require("express")
const { ClassModel } = require("../model/classify.model")

const classRouter=express.Router()

classRouter.post("/create",async(req,res)=>{
    const {name,description,category,image,location,postedAt,price}=req.body;
    const classy= new ClassModel({name,description,category,image,location,postedAt,price})
    
    await classy.save()
    res.send("class is created")
})


// get 

classRouter.get("/",async(req,res)=>{





    const classy= await ClassModel.find()
    res.send(classy)
})



// delete 

classRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const classy = await ClassModel.findOne({ "_id": id });

    try {
        
            await ClassModel.findByIdAndDelete({ _id: id })
            res.send("Class Deleted successfully");

        
    

    } catch (e) {
        res.send("Something went wrong  ");

    }
})


module.exports={
    classRouter
}