// Import ExpressJS
const express = require("express");
const app = express();
// Start Local HTTP Server
app.listen(3000);

// Start Web page application
// Start root page 
app.get("/", (req, res) => {
  res.sendFile('./index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./views/About/about.html', {root: __dirname});
});

app.get('/docs', (req, res) => {
  res.sendFile('./views/Documents/docs.html', {root: __dirname});
});

app.get('/login', (req, res) => {
  res.sendFile('./views/Login/login.html', {root: __dirname});
});

app.get('/registration', (req, res) => {
  res.sendFile('./views/Registration/Company/company.html', {root: __dirname});
});

app.get('/App', (req, res) => {
  res.sendFile('./views/App/App.html', {root: __dirname});
});

app.get('/error', (req, res) => {
  res.status(404).sendFile('./views/404/404.html', {root: __dirname});
});

// Firebase 
const {
  firebase,
  fireAuth,
  fireStore,
  fireAdmin
} = require("./services/fireup");

// active to see full object in console 
// notes/ folder
//console.log(firebase);
//console.log(fireAuth);
//console.log(fireStore);
//console.log(fireAdmin);



