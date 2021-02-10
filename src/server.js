"use strict";
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.write("" + app);
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running at port: " + PORT);
});
