const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
//testing adding from heroku app
//HI!

// https://www.youtube.com/watch?v=OPxeCiy0RdY
var io = require('socket.io')(http)
//anyone seeing this?
var http = require('http')

var Log = require('log')
var log  = new Log('debug')
var app = new express();
// Check out web RTC
//express()
//set the static files
  app.use(express.static(path.join(__dirname, 'public')))
//say where the views are
  app.set('views', path.join(__dirname, 'views'))
//set the view engine to ejs syntax
  app.set('view engine', 'ejs')
//root route
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, function() {
    log.info(`Listening on  ${ PORT }`)
  })
//test
  //route for webcam
  // app.get('/cam', (req, res) =>  res.render('../public/myVideo.html') )
  //route for webcam script
//webcam stuff




// io.on('connection', function(socket){

//   socket.on('stream', function(image) {
//     socket.broadcast.emit('stream', image);
//   })
// })