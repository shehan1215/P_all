const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const dotenv = require("dotenv").config();

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080;

//schema
const schema = mongoose.Schema({
    name: String,
    email : String,
    mobile : Number,
},{
    Timestamp : true
})

app.get("/", (req,res)=>{
    res.json({message : "Server is not problem"})
})

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT,()=>console.log("Server is running"))
}).catch((err) => console.error(err));


