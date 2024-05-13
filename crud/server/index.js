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
    mobile : Number,
},{
    Timestamps : true
})
const userModel = mongoose.model("user",schemaData)

// read the data
app.get("/", async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true, data:data})
})

// create data or save data
app.post("/create", async(req, res)=>{
    console.log(req.body);
    const data = new userModel(req.body)
    await data.save()
    res.send({success : true, message : "data save successfully"})
})


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT,()=>console.log("Server is running"))
}).catch((err) => console.error(err));


