const express = require('express');
const path = require('path');
const app = express();

app.get("/", (req, res) =>{
    res.send("hello Aditya !");
})

app.listen('3000', () =>{
    console.log("server running.. on http://localhost:3000");
})