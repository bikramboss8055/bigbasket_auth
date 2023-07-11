const express=require("express")
const UserRout=express.Router()
const UserModel =require("./user.module")

UserRout.post("/ragister",async(req,res)=>{
let data=req.body

if(data.firstname && data.lastname && data.email && data.password ){
try{
let d=await UserModel.find({email:data.email})
console.log(d)
if(d.length>0){
res.status(400).send(`email ${data.email} already exist`)
}
else{
await UserModel.create({...req.body})
res.send("ragistration done")
}
}
catch(err){
res.status(400).send(`error ${err}`)
}
}
else{
    res.status(400).send("incomplet data data")
}
})

UserRout.post("/login",async(req,res)=>{
    let data=req.body
    console.log(data)
    if(data.email && data.password){
    try{
    let d=await UserModel.findOne({email:data.email})
    if(d.email===data.email && d.password===data.password){
        
    res.send({
        user:d.firstname,
        email:data.email,
        status:200
    })
    }
    else{
    res.status(400).send("invalid credentials")
    }
    }
    catch(err){
    res.status(400).send(`error ${err}`)
    }
    }
    else{
        res.status(400).send("incomplete data")
    }
    })


module.exports=UserRout