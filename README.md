# node-graphql-goodreads
Messing around with graphql

## Run GraphiQL webserver at http://localhost:4000
`node serve.js`

## Enter different GraphQL queries with author ID #'s to ping Goodreads API and grab their list of books

''''
query {
  author(id: 4339) {
    name,
    books {
      title,
      isbn,
      year
    }
  }
}
''''
