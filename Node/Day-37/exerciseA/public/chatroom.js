$(()=>{

    alert('Join a room, input your user/ ID and you can start typing.')
    let socket = io.connect('http://localhost:8080');
//connect to socket.io

//set up our variables from the DOM (select the page elements we commonly use)
let message = $('#message');
let btn = $('#send')
let handle = $('#handle')
let output = $('#output')
let echo = $('#echo')
let joinRoom = $('#join')
let chatwindow = $('#chat-window')

//submit events to io 

//submit a chat message - press send button
btn.on('click', ()=>{
    socket.emit('chat',{
        message: message.val(),
        handle: handle.val()
    })
    message.val('');
})

message.keypress((event)=>{
    if (event.keyCode == 13){
        console.log('enter pressed')
        socket.emit('chat',{
            message: message.val(),
            handle: handle.val()
        })
        message.val('');
    }
})

// if someone is typing emit the isTyping event

message.keypress((event)=>{
    if (event.keyCode !== 13){
        socket.emit('isTyping', handle.val())
    }
})

//listen events from io
socket.on('chat', (data)=>{
    echo.html('<p> &nbsp</p>')
    output.append($('<p>').text( `${data.handle}: ${data.message}`));
    chatwindow.scrollTop = chatwindow.scrollHeight
});

socket.on('isTyping', (data)=>{
    echo.html('<p><em>'+ data +' is typing a message... </em></p>');
});

// join a room

joinRoom.on('click', ()=>{
    let room = prompt('Which room do you want to join?')
    socket.emit('subscribe', room)
});

})

//Method two, get username in a prompt
// var name = prompt('what is your name'), pass this variable with the chat messages (in an object) - replace handle.val()
