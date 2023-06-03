

const mongoose=require("mongoose")

const classSchema=mongoose.Schema({
    name: String,
    description : String,
    category : String,
    image : String,
    location : String,
    postedAt : Date,    
    price : String
})

 const ClassModel=mongoose.model("class",classSchema)

module.exports={
    ClassModel
}