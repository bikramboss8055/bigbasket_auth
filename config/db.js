const mongoose =require("mongoose")
require("dotenv").config()
const url=process.env.url
const Connect=mongoose.connect(url)
module.exports=Connect