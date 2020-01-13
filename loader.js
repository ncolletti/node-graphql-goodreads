require('dotenv').config();
const apiKey = process.env.GOODREADS_API_KEY
const GOODREADS_API = `https://www.goodreads.com/{{ENDPOINT}}/show/?key=${apiKey}&format=xml`

const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);


const author = id => fetch(GOODREADS_API.replace('{{ENDPOINT}}', 'author').concat(`&id=${id}`))
.then(response => response.text())
.then(parseXML)

const book = id => fetch(GOODREADS_API.replace('{{ENDPOINT}}', 'book').concat(`&id=${id}`))
.then(response => response.text())
.then(parseXML)

module.exports = {
  author,
  book,
}
