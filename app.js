var express       = require('express')
var app           = express()
var server        = require('http').createServer(app)
var port          = process.env.PORT || 3000
var morgan        = require('morgan')
var bodyParser    = require('body-parser') 
var io            = require('socket.io')(server)   


//tell express that we are using EJS to drive our views
//tell express where to find the EJS files
app.set('view engine', 'ejs')
app.set('views', './views')


app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.render('index')
})

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    console.log(msg)
    io.emit('chat', msg)
  })
})



//initiate server 
server.listen(port, function(){
  console.log('Server started on port %s...', port)
})