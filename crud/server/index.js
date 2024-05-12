const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const dotenv = require("dotenv").config();

const app = express()
app.use(cors())

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

app.get("/", async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true, data:data})
})



mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT,()=>console.log("Server is running"))
}).catch((err) => console.error(err));


