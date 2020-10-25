const express = require('express');
const path = require('path');
const env = require('dotenv');
const {graphqlHTTP} = require('express-graphql');
const {
    graphql,
    buildSchema
} = require('graphql');

const app = express();

var schema = buildSchema(`
  type Query {
    hello: [How]
  }

  type How {
      name: String,
      age: Int,
      note: String
  }
`);

var root = {
    hello: () => 'Hello world!'
};

app.use('/graphql', new graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    
}))

var domData = {
    users: [
        {
            name:"Ankita sing",
            age:18,
            note:"nom ba ki na"

        },
        {
            name: "Aditya lam",
            age: 24,
            note:"how to lam"

        },
        {
            name: "nitu chudail",
            age: 74,
            note:"35465 huyjrfu id"

        },
        {
            name: "ladli maurya",
            age:12,
            note:"how atr uoy adit ladli"

        },
    ]
}


env.config();
app.set('port', process.env.port || 3000);


app.get("/", (req, res) =>{
    res.send("hello Aditya !");
})

app.listen(app.get('port'), () =>{
    console.log(`server running.. on http://localhost:${app.get("port")}`);
    console.log(`GrapgQl running.. on http://localhost:${app.get("port")}/graphql`);
})