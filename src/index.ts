import express from 'express';


// Create an express server and a GraphQL endpoint

const app: express.Application = express();

app.use('/',() => console.warn('hello'));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));