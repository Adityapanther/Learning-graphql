const express = require('express');
const path = require('path');
const env = require('dotenv');
const {graphqlHTTP} = require('express-graphql');
const db = require("./database/db");
const {
    graphql,
    buildSchema
} = require('graphql');

const app = express();

var schema = buildSchema(`
  type Query {
    users:[user],
    messages:[message]
  }

  type user {
      name: String,
      age: Int,
      note: String
  }

  type message {
      name: String,
      message: String
  }



`);

var root = {
    users: () => db.users,
    messages: () => db.messages
};

app.use('/graphql', new graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    
}))






env.config();
app.set('port', process.env.port || 3000);


app.get("/", (req, res) =>{
    res.send("hello Aditya !");
})

app.listen(app.get('port'), () =>{
    console.log(`server running.. on http://localhost:${app.get("port")}`);
    console.log(`GrapgQl running.. on http://localhost:${app.get("port")}/graphql`);
})