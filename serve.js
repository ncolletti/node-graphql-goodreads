const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const DataLoader = require('dataloader');
const open = require('open');

const fetchAuthor = require('./loader').author;
const fetchBook = require('./loader').book;

app.use('/graphql', graphqlHTTP(req => {
    const loaders = {
        author: new DataLoader(keys => Promise.all(keys.map(fetchAuthor))),
        book: new DataLoader(keys => Promise.all(keys.map(fetchBook))),
      };

    return {
        schema,
        context: { loaders },
        graphiql: true
    }
}));

app.listen(4000);

const graphQlWebUrl = 'http://localhost:4000/graphql';
const exampleQuery = '?query=query%20%7B%0A%20%20author(id%3A%204339)%20%7B%0A%20%20%20%20name%2C%0A%20%20%20%20books%20%7B%0A%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20isbn%2C%0A%20%20%20%20%20%20year%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D';

console.log(`GraphQL listening on ${graphQlWebUrl} ...`);

// open(graphQlWebUrl.concat(exampleQuery));