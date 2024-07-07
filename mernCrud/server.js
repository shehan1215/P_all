const express = require('express');
const app = express();

const port = 8000;

app.listen(port, ()=>{
    console.log(`App is already running on ${port}`);
});