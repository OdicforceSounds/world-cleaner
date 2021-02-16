// Express
var express = require("express");
var app = express();

console.log(app);

var firebase = require("firebase/app");
console.log(firebase);

var fireAuth = require("firebase/auth");
console.log(fireAuth);

var fireStore = require("firebase/firestore");
console.log(fireStore);


app.get("/", function (req, res) {
  app.listen(PORT, function () {
    console.log("Server is running at port: " + PORT);
  });
});
