const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});


//====================== method One - chat stream====================
// io.on('connection', (socket)=>{
//     console.log('A user has connected to our sever');

//     socket.on('disconnect', ()=>{
//         console.log('A user has left the server.');
//     });

//     socket.on('chat message', function(msg){
//         console.log(`Message: ${msg}`);
//         io.emit('chat message', msg)
//     });
// });


//====================== method two - name spaces ====================

// let one = io.of('/namespace1');
// one.max_connections = 3;
// one.current_connections = 0;

// one.on('connection', (socket) => {
//     if (one.current_connections >= one.max_connections) {
//         socket.emit('disconnect', 'I\'m sorry, too many connections');
//         socket.disconnect()

//     } else {
//         one.current_connections++;
//         console.log(one.current_connections)
//         console.log('a user connected to namespace1');

//         socket.on('chat message', function (msg) {
//             console.log('message: ' + msg);
//             one.emit('chat message', msg)
//         })
//         socket.on('disconnect', () => {
//             console.log('a user has left us')
//         });
//     }
// })

// let two = io.of('/namespace2');
// two.max_connections = 3;
// two.current_connections = 0;
// two.on('connection', (socket) => {
//     two.current_connections ++;
//     console.log(two.current_connections)
//     console.log('a user connected to namespace2');

//     socket.on('chat message', function (msg) {
//         console.log('message: ' + msg);
//         one.emit('chat message', msg)
//     })
//     socket.on('disconnect', () => {
//         console.log('a user has left us')
//     });

// })

io.on('connection', (socket)=>{
    socket.on('disconnect', ()=>{
        console.log('A user has left')
    });

    socket.on('subscribe', (room)=>{
        chatroom = room;
        socket.join(room);
        console.log(`A user has connected to room ${room}`);
    });

    socket.on('chat message', function(msg){
        console.log(`Message: ${msg}`)
        io.to(chatroom).emit('chat message', msg);
    });

});




http.listen(3030)