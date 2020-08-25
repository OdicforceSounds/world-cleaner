// World Wide Brands Competition for Image propose Only
// by Odicforcesounds aka OscarFM and Daoteams

// NodeJS Core Modules
// using express, don't need to call http module
const http = require("http");

// NodeJS third Party Modules
const express = require("express");
const bodyParser = require("body-parser");

// Program Start here
// assign express to app
const app = express();

// Working with ExpressJS
// The Middleware way
//
// Body Parsers
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/register", (req, res, next) => {
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.send(`Welcome: You are ${ip}:${port}`);
  res.end();
});

app.listen(3000);
