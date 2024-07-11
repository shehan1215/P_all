const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const port = 8000;
const DB_URL = 'mongodb+srv://shehan:shehan123@mernapp.symu0zh.mongodb.net/crudMern?retryWrites=true&w=majority&appName=mernApp';

mongoose.connect(DB_URL).then(()=>{
    console.log('DB connect successfully');
}).catch((err)=> console.log('DB connect unsuccessful', err))

app.listen(port, ()=>{
    console.log(`App is already running on ${port}`);
});