const express = require('express')
const logger = require('morgan')
const bodyParser = require("body-parser")
const {request, response} = require('express')

const firebase = require('firebase')

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAL-fdfgIJ-8Xk_tHMfPhea_u7t3QrhwHA",
  authDomain: "whitecat-3f4e4.firebaseapp.com",
  databaseURL: "https://whitecat-3f4e4.firebaseio.com",
  projectId: "whitecat",
  storageBucket: "whitecat.appspot.com",
  //messagingSenderId: "915695456542",
  appId: "1:915695456542:web:2b45812d52706a344cf90f"
};

firebase.initializeApp(config);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

// update firestore settings
db.settings({timestampsInSnapshots: true});

console.log(db.settings)
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('views'))
app.set('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(logger('dev'))

const port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Server is running on port ' + port)
})

app.get('/', (request, response) => {
  response.render('home', {
    pageTitle: 'World Cleaner Home Page',
  })
})

app.get('/register', (request, response) => {
  response.render('register', {pageTitle: 'Registration Page'})
})

app.get('/login', (request, response) => {
  response.render('login', {pageTitle: 'Login Page'})
})

app.get('/profile', (request, response) => {
  response.render('profile', {pageTitle: 'User Profile'})
})

app.get('/help', (request, response) => {
  response.render('help', {
    pageTitle: 'Help Page'
  })
})

// 404
app.use((request, response) => {
  res.status(404).render('404', {title: '404'})
})
