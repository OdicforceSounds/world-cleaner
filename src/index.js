const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('yellow');
}

const server = http.createServer(requestListener);
server.listen(4200); 

const firebase = require('firebase');
var auth = require('firebase/auth');
var firestore = require('firebase/firestore');
var admin = require("firebase-admin");

//var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://whitecat-4f4e4.firebaseio.com"
});

var firebaseConfig = {
  apiKey: " AIzaSyAL-fdfgIJ-9Xk_tHMfPhea_u7t3QrhwHA",
  authDomain: "whitecat-4f4e4.firebaseio.com",
  databaseURL: "https://whitecat-4f4e4.firebaseio.com",
  projectId: "whitecat",
  storageBucket: "whitecat-4f4e4.firebaseio.com",
  AppId: "0:915695456542:web:2b45812d52706a344cf90f",
}

firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);  // "[DEFAULT]"
console.log(otherProject.name);    // "otherProject"
var defaultStorage = firebase.storage();
var defaultFirestore = firebase.firestore();

