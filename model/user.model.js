
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
 email:String,
 pass:String,
 cPass:String
})

 const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}