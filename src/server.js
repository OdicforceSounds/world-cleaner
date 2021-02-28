const express = require('express')
const logger = require('morgan')
const bodyParser = require("body-parser")
const {request, response} = require('express')

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
    pageTitle: 'Home',
    bodyTitle: 'World Wide Brands Competition Challenge',
    subTitle: 'For Image Propose Only'
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
