
$(()=>{

    alert("Join a room, input a name, then send your messages")

let socket = io.connect('http://localhost:8080');

let message = $('#message');
let sendBtn = $('#send');
let handle = $('#handle')
let output = $('#output')
let echo = $('#echo')
let chatwindow = $('#chat-window')
let joinRoom =  $('#join')

//submit events to io 
//submit a chat message - press send button

sendBtn.on('click', ()=>{
    socket.emit('chat',{
        message : message.val(),
        handle : handle.val()
    });
    message.val('')
});

//submit a chat message - press enter

message.keypress((event)=>{
    if (event.keyCode == 13){
        socket.emit('chat',{
            message:message.val(),
            handle:handle.val()
        })
        message.val('')
    };
});

// if someone is typing emit the isTyping event
message.keypress((event)=>{
    if (event.keyCode !== 13){
        socket.emit('isTyping', handle.val())
    };
});


//listen events from io
socket.on('chat', (data)=>{
    echo.html('<p> &nbsp</p>');
    output.append($('<p>').text(`${data.handle} : ${data.message}`));
    chatwindow.scrollTop = chatwindow.scrollHeight;
});

socket.on('isTyping', (data)=>{
    echo.html('<p><em>'+ data +' is typing a message... </em></p>');
});

// join a room
joinRoom.on('click', ()=>{
    let room = prompt('Which room do you want to join?');
    socket.emit('subscribe', room);
});

})

// Method Two, create a variable called name, that is equal to a prompt when you load the to capture the value of a name, instead of passing handle.val() pass this variable, name