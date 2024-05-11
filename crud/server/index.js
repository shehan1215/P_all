const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to Database"))
.catch((err) => console.error(err));

app.get("/", (req,res)=>{
    res.json({message : "Server is not problem"})
})



app.listen(PORT,()=>console.log("Server is running"))
