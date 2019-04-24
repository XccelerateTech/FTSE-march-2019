//connect to socket.io

let socket = io.connect('http://localhost:8080');

//set up our variables from the DOM (select the page elements we commonly use)
//code without jQuery selection
let message = document.querySelector("#message");
let btn = document.querySelector("#send");
let handle = document.querySelector("#handle");
let output = document.querySelector("#output");
let echo = document.querySelector("#echo");
let chatwindow = document.querySelector("#chat-window");
let joinRoom = document.querySelector("#join")

//submit events to io 

//submit a chat message - press send button
btn.addEventListener('click', ()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
    message.value =''
});

//submit a chat message - press enter
message.addEventListener('keypress', (event)=>{
    if (event.keyCode == 13){
        socket.emit('chat',{
            message:message.value,
            handle:handle.value
        })
        message.value =''
    }
});

// if someone is typing emit the isTyping event
message.addEventListener('keypress', ()=>{
    if (event.keyCode !== 13){
        socket.emit('isTyping', handle.value)
    }
});

//listen events from io
socket.on('chat', (data)=>{
    echo.innerHTML ='<p> &nbsp</p>'
    output.innerHTML +='<p><strong>' + data.handle+ ': </strong>' + data.message + '</p>'
    chatwindow.scrollTop = chatwindow.scrollHeight
});

socket.on('isTyping', (data)=>{
    console.log('hello')
    echo.innerHTML = '<p><em>'+ data +' is typing a message... </em></p>'
});

// join a room

joinRoom.addEventListener('click', ()=>{
    let room = prompt('Which room do you want to join?')
    socket.emit('subscribe', room)
});
