

const express=require("express")
const { dbConnection } = require("./configs/db")
const { userRouer } = require("./routes/user.route")
const { classRouter } = require("./routes/classify.route")

const cors = require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("homepage")

})

app.use("/user",userRouer)
app.use("/classy",classRouter)

app.listen(8080,async()=>{
    try{
    await dbConnection
    console.log("connected to db")
    }
    catch(e){
   console.log(e.message)
    }
    console.log("listening port at 8080")
})