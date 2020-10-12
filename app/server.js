const express = require('express');
const path = require('path');
const env = require('dotenv');
const app = express();

env.config();
app.set('PORT', process.env.port || 3000);


app.get("/", (req, res) =>{
    res.send("hello Aditya !");
})

app.listen(app.get('PORT'), () =>{
    console.log(`server running.. on http://localhost:${app.get("PORT")}`);
})