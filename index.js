const express=require("express")
require("dotenv").config()
const port=process.env.port
const cors=require("cors")
const Connect = require("./config/db")
const UserRout = require("./model/user.rout")
const app =express()
app.use(express.json())
app.use(cors())
app.use("/user",UserRout)
app.listen(port,async()=>{
    try{
        await Connect
        console.log(`Server running at port ${port}`)
    }
    catch(err){
        console.log(`errpr ${err}`)
    }
})

