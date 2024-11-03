const express = require("express")
const mongoose = require("mongoose")

const app = express();
//Connect the Middleware
app.use("/",(req,res,next)=>{
    res.send("Working no problem")
});

// connect the database
mongoose.connect("mongodb+srv://admin:o7Pv1rWCjdK8k5qy@cluster0.iczfx.mongodb.net/")
.then(()=>console.log("Database Connected")).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log((err)));