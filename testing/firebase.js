// Fire Up 
// firebase App
//var firebase = require("firebase/firebase-app");
//var firebaseConfig = {
//apiKey: "AIzaSyBmCG4ViU9rjN7gE7nnSSaW-AIJJo9aQPc",
//authDomain: "fireup-c1159.firebaseapp.com",
//databaseURL: "https://fireup-c1159.firebaseio.com",
//projectId: "fireup-c1159",
//storageBucket: "fireup-c1159.appspot.com",
//messagingSenderId: "354260595930",
//appId: "1:354260595930:web:693b9428d65d7ade09a1e3",
//measurementId: "G-3ZSWQJQH95"
//};
//firebaseConfig.initializeApp();
//var db = firebase.firestore();
//db.settings({timestampsInSnapshots});

//console.log(db);

// Firebase Realtime Database
//var databse = firebase.database();

//function writeUserData(userId, name, email) {
//firebase.databse().ref('users/' + userId).set({
//username: name,
//email: email
//})
//}

//// Firebase Auth 
//var auth = require("firebase/auth");
//firebase.auth().createUserWithEmailAndPassword(email, password)
//.then((userCredential) => {
//var user = userCredential.user;
//})
//.catch((error) => {
//var errorCode = error.code;
//var errorMessage = error.message;
//});

//// Firebase FireStore 
//var fireStore = require("firebase/firestore");

//// Admin
//var admin = require("firebase-admin");
//var serviceAccount = require("./save/admsdk.json");
//admin.initializeApp({
//credential: admin.credential.cert(serviceAccount),
//databaseURL: "https://whitecar-3f4e4.firebaseio.com"
//});

//var db = admin.firestore();

//// Firebase Functions
//var functions = firebase.functions();
//var addMessage = firebase.functions().httpsCallable('addMessage');
//addMessage({text: messageText})
//.then((result) => {
//var sanitizedMessage = result.data.text;
//})
//.catch((error) => {
//var code = error.code;
//var message = error.message;
//var details = error.details;
//});


//// Analytics
//var analytics = firebase.analytics();
//firebase.analytics().logEvent('notification_received');

// Express
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  app.listen(PORT, function () {
    console.log("Server is running at port: " + PORT);
  });
});
