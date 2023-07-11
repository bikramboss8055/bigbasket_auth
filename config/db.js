const mongoose =require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', true);
const url=process.env.url
const Connect=mongoose.connect(url)
module.exports=Connect