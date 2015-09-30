var socket    = io('http://771de392.ngrok.io')

socket.on('connect', function(){
  console.log('connected!!!')
})

$('#chat').on('submit', function(event){
  event.preventDefault();
  var $input = $('#chat-input')  
  saySomething('Niall', $input.val())
  $input.val('')
})

socket.on('chat', function(message){

  append(message)
})






function saySomething(user, text){
  var message = user +' >>  '+ text
  socket.emit('chat', message)
}


function append(message){
  var $output = $('#chat-output')

  var template = '<li>' 
  template += message 
  template += '</li>'
  $output.append(template)

  console.log(template)
}