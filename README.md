# node-graphql-goodreads
This repo is a learning excerise for me to understand and use GraphQL.

## Why is this tool important? 💻
GraphQL allows you to write queries with an object structure to retrieve data from any type of API, even complicated XML endpoints. It allows for an abstraction level to manipulate data from the API to better display or manipulate the data for the end user/frontend project.

## New Updates! 🎊
I saw this old repo in my git history and wanted to revisit this again to make small improvements to help me play with GraphQL again this year.

- Added nodemon to monitor changes during my refactoring and updates
- Removed key and reset with goodreads
- Added dotenv package to handle the key within a dot file, also git ignored.
- Updated architecture to include a loader for each datatype with graphql.


## How to use? 🤔
```
Git clone https://github.com/ncolletti/node-graphql-goodreads.git

Go to Goodreads and register for an API key.

Add a .env file with GOODREADS_API_KEY=<your_key>

npm start
```

Enter different GraphQL queries with author ID #'s to ping Goodreads API and grab their list of books

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
