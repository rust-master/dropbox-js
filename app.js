require('dotenv').config()
// require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;

console.log("Token:", process.env.TOKEN)

var dbx = new Dropbox({ accessToken: process.env.TOKEN });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });