const express = require('express')
const logger = require('morgan')
const bodyParser = require("body-parser")

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

app.get('/', function (request, response) {
  response.render('home.ejs')
})


// Not Working! ( Why? ) Good Question!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//app.get('/result', function (request, response) {
  //response.render('result.ejs')
//})




