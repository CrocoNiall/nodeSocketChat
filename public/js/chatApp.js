var socket    = io('http://771de392.ngrok.io');
var chatBox   = $('#chatContainer') 
socket.on('connect', function(){
  console.log('connected!!!')
})

function saySomething(user, text){
  var message = user +' %>  '+ text
  socket.emit('chat', message)
  append(message)
}


function append(message){
  var template = <
  chatBox.appaned()
}