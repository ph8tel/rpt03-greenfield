const express = require('express')
const users = require('./routes/users');
const path = require('path')
const bodyParser = require ('body-parser');
const PORT = process.env.PORT || 5000

var io = require('socket.io')(http)

var http = require('http')

var Log = require('log')
var log  = new Log('debug')
var app = new express();
//set the static files
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')))
//say where the views are
  app.set('views', path.join(__dirname, 'views'))
//set the view engine to ejs syntax
  app.set('view engine', 'ejs')
//root route
  app.get('/', (req, res) => res.render('pages/index'))
  app.use('/API', users); //look ma I used a semicolon!
  app.listen(PORT, function() {
    log.info(`Listening on  ${ PORT }`)
  })
