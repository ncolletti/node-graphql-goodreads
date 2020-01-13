const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { AuthorType } = require('./graphql/types/author');
const { BookType } = require('./graphql/types/book');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'run a query against goodreads api',

        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args, { loaders }) => loaders.author.load(args.id)
            },
            book: {
                type: BookType,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args, { loaders }) => loaders.book.load(args.id)
            }
        })
    })
})

