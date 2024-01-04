require("dotenv").config();
var Dropbox = require("dropbox").Dropbox;

console.log("Token:", process.env.TOKEN);

var dbx = new Dropbox({ accessToken: process.env.TOKEN });
dbx
  .filesListFolder({ path: "" })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
