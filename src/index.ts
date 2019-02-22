import express from 'express';


// Create an express server and a GraphQL endpoint

const app: express.Application = express();

app.use('/',() => {console.warn('hello'); return 'Hello world';});

app.listen(4000, () => console.log('Express Server Now Running On localhost:4000/'));