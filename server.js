const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){

  socket.on('room', function(room) {
    io.to(room).emit('Someone joined');
    socket.join(room);
  });

  socket.on('chat message', function(msg, room, userName){
    io.to(room).emit('chat message', msg, userName);
  });

  socket.on('disconnect', function() {
    io.emit('Someone left!')
  });

});

server.listen(3001, function(){
  console.log('listening on *:3001');
});