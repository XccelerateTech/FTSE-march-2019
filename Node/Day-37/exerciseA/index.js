// Require all needed modules
const express = require('express');
const socket = require('socket.io');

// set up express application, http and socket
const app = express();
const http = require('http').Server(app);
const io = socket(http);

// serve the stylesheet and css up to the server
app.use(express.static('public'))

// send the clients an index when they goto localhost:8080
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
});

// set up what happens when people connect / disconnect to our rooms / page
io.on('connection', (socket)=>{
    console.log('A user entered the space')

    socket.on('disconnect', ()=>{
        console.log('A user has left our space')
    })

    socket.on('subscribe', (room)=>{
        chatroom = room;
        socket.join(room);
        console.log(`A user has connected to room ${room}`);
    });

    //handle the chat event emitted from the front end
    socket.on('chat', function(data){   
        io.to(chatroom).emit('chat', data)  
    });
    //handle the isTyping event emitted from the front end
    socket.on('isTyping', function(data){
        socket.broadcast.to(chatroom).emit('isTyping', data)
    });
})


http.listen(8080, ()=>{
    console.log(`Listening to port 8080`)
})