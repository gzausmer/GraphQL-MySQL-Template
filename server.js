import express from 'express';
import graphqlHTTP from 'express-graphql';
import {connection} from "./Connectors/mysql";
import {schema} from "./Schema/schema";

let app = express();

app.listen(3000);

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Failed connecting to database ... \n\n");
    }
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));





