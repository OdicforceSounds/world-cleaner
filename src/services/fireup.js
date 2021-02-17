const firebase = require("firebase/app");
const fireAuth = require("firebase/auth");
const fireStore = require("firebase/firestore");
const fireAdmin = require("firebase-admin")

// Working! 
//console.log(firebase);
//console.log(fireAuth);
//console.log(fireStore);
//console.log(fireAdmin);

// Firebase Configuration for this account (white-cat)
const fireConfig = {
  apiKey: "AIzaSyAL-fdfgIJ - 8Xk_tHMfPhea_u7t3QrhwHA",
  authDomain: "whitecat-3f4e4.firebaseapp.com",
  databaseURL: "https://whitecat-3f4e4.firebaseio.com",
  projectId: "whitecat",
  storageBucket: "whitecat.appspot.com",
  messagingSenderId: "915695456542",
  appId: "1:915695456542:web:2b45812d52706a344cf90f"
}

const fireUp = firebase.initializeApp(fireConfig);
// console.log(fireUp);

// Admin
const serviceAccount = require("./key.json");

fireAdmin.initializeApp({
  credential: fireAdmin.credential.cert(serviceAccount),
  databaseURL: "https://whitecat-3f4e4.firebaseio.com"
});


module.exports = {
  firebase: firebase,
  fireAuth: fireAuth,
  fireStore: fireStore,
  fireAdmin: fireAdmin
}


