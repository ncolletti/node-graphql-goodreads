const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql');
const { BookType } = require('./book');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'an author',
    fields: () => ({
        name: {
            description: 'the author\'s name',
            type: GraphQLString,
            resolve: xml => xml.GoodreadsResponse.author[0].name[0]
        },
        books: {
            description: 'list of books written by the author',
            type: new GraphQLList(BookType),
            resolve: (xml, args, { loaders }) => {
                const ids = xml.GoodreadsResponse.author[0].books[0].book.map(book => book.id[0]._);
                return loaders.book.loadMany(ids);
            },
        }
    })
})

module.exports = {
    AuthorType
}