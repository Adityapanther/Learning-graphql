const express = require('express');
const path = require('path');
const env = require('dotenv');
const expressGraphQl = require('express-graphql');
const graphQl = require('graphql');

const app = express();

env.config();
app.set('port', process.env.port || 3000);


app.get("/", (req, res) =>{
    res.send("hello Aditya !");
})

app.listen(app.get('port'), () =>{
    console.log(`server running.. on http://localhost:${app.get("port")}`);
})