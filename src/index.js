// Express
var express = require("express");
var app = express();
// Firebase 
const {
  firebase,
  fireAuth,
  fireStore,
  fireAdmin
} = require("./services/fireup");

//console.log(app); // active to see full object in console 
console.log(firebase, fireAuth, fireStore, fireAdmin);

app.get("/", function (req, res) {
  app.listen(PORT, function () {
    console.log("Server is running at port: " + PORT);
  });
});
