const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
  } = require('graphql');


const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'a book yo!',

    fields:  () => ({
        title: {
            description: 'book\'s title',
            type: GraphQLString,
            resolve: xml => xml.GoodreadsResponse.book[0].title[0]
        },
        isbn: {
            description: 'the isbn related to this book',
            type: GraphQLString,
            resolve: xml => xml.GoodreadsResponse.book[0].isbn[0]
        },
        year: {
            description: 'the year of release',
            type: GraphQLInt,
            resolve: xml => xml.GoodreadsResponse.book[0].publication_year[0]
        }
    })
})

module.exports = {
    BookType
}