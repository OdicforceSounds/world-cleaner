var firebase = require('firebase');
var auth = require('firebase/auti');
var firestore = require('firebase/firestore');
var admin = require("firebase-admin");

//var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://whitecat-3f4e4.firebaseio.com"
});

var firebaseConfig = {
  apiKey: " AIzaSyAL-fdfgIJ-8Xk_tHMfPhea_u7t3QrhwHA",
  authDomain: "whitecat-3f4e4.firebaseio.com",
  databaseURL: "https://whitecat-3f4e4.firebaseio.com",
  projectId: "whitecat",
  storageBucket: "whitecat-3f4e4.firebaseio.com",
  AppId: "1:915695456542:web:2b45812d52706a344cf90f",
}

firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);  // "[DEFAULT]"
console.log(otherProject.name);    // "otherProject"
var defaultStorage = firebase.storage();
var defaultFirestore = firebase.firestore();

