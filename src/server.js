"use strict";
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  app.listen(PORT, function () {
    console.log("Server is running at port: " + PORT);

  });
});
