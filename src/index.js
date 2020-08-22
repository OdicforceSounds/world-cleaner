// World Wide Brands Competition for Image propose Only
// by Odicforcesounds aka OscarFM and Daoteams

// NodeJS Core Modules
// using express, don't need to call http module
// const http = require('http');

// NodeJS third Party Modules
const express = require("express");
const bodyParser = require("body-parser");

// FIREBASE.COM
const systemAdmin = require("./app/api/firebase/systemAdmin");
const systemAuth = require("./app/api/firebase/systemAuth");
const systemCloud = require("./app/api/firebase/systemCloud");
const systemUI = require("./app/api/firebase/systemUI");
// GOOGLE.COM
const googleMaps = require("./app/api/google/googleMapsApi");
const youtube = require("./app/api/youtube/youtubeApi");
// Program Modules 
// COMPANIES MODULES 
const companiesStatus = require("./app/companies/companiesStatus");
const companyPoints = require("./app/companies/companyPoints");
const companyRegister = require("./app/companies/companyRegistration");
const companyStat = require("./app/companies/companyStats");
// INTERNAL SYSTEM MODULES 
const systemCP = require("./app/system/systemConceptProofs");
const systemCtrl = require("./app/system/systemControl");
const systemPath = require("./app/system/systemPaths");
const systemSDK = require("./app/system/systemSDK");
const systemStat = require("./app/system/systemStatus");
// USER MANAGEMENT MODULES 
const userCoins = require("./app/users/userCoins");
const userDevice require("./app/users/userDevice.ts");
const userFunctions = require("./app/users/userFunctions");
const userPoints = require("./app/users/userPoints");
const userRate = require("./app/users/userRate");
const userRegist = require("./app/users/userRegistration");
const userReview = require("./app/users/userReviews");
const userInterface = require("./app/users/userInterface");
// ROUTES 
const expressRoutes = require("./routes/expressRoutes");

// Program Start here
// assign express to app
const app = express();

// Working with ExpressJS
// The Middleware way
//
// Body Parsers
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/register", (req, res, next) => {
  res.send("<h1>Register Page!</h1>");
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Main Page</h1>");
});

app.listen(3000);
