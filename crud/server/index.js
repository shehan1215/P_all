const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const dotenv = require("dotenv").config();

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080;

//schema
const schemaData = mongoose.Schema({
    name: String,
    email : String,
    mobile : String,
},{
    Timestamps : true
})
const userModel = mongoose.model("user",schemaData)

// read the data
// http://localhost:8080/
app.get("/", async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true, data:data})
})

// create data or save data
// http://localhost:8080/create
app.post("/create", async(req, res)=>{
    console.log(req.body);
    const data = new userModel(req.body)
    await data.save()
    res.send({success : true, message : "data save successfully" ,data : data})
})

//data update
// http://localhost:8080/update
app.put("/update",async(req,res)=>{
    console.log(req.body);
    const {_id, ...rest} = req.body
    console.log(rest);
    const data = await userModel.updateOne({_id: req.body.id},rest)
    res.send({success:true, message:"data update successfull" ,data : data})
})

//data delete
// http://localhost:8080/delete/id
app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id);
    const data = await userModel.deleteOne({_id:id})
    res.send({success:true, message:"data deleted successfull" ,data : data})
})

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT,()=>console.log("Server is running"))
}).catch((err) => console.error(err));


