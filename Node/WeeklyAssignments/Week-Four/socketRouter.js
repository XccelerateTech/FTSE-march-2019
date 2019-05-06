// this file handles the socket events
class SocketRouter {
    constructor (io, redisClient, chatroomName){
        this.io = io;
        this.redisClient = redisClient;
        this.chatroomName = chatroomName;
    }

    router() {
        this.io.on('connection', (socket) => {
            // THIS IS THE POINT WHERE... we connect a user to the session store in redis
            console.log('a user has connected to our socket.io server');
            console.log('this is from socket.io', socket.session.passport);

            if(!socket.session.passport){
                socket.emit('unauthorized')
            } else {
                this.onConnect(socket);

                socket.on('chat message', (msg)=>{
                    this.onMessageRecieved(socket,msg);
                });

                socket.on('I NEED MORE', (count)=>{
                    this.onLoadMore(socket,count);
                });
            }
        });
    }

    onConnect(socket){
        // load previous messages from this chatroom
        this.redisClient.lrange(this.chatroomName, 0, 20, (err, messages)=>{
            if(err){
                console.log(err);
                this.io.emit('chat error', 'Sorry! Something went wrong!');
                return;
            }
            messages.reverse();
            socket.emit('initial messages', messages);
        });
    }

    onMessageRecieved(socket, msg, cb){
        // handle sending messages 
        const user = socket.session.passport.user;
        const wholeMessage = user.profile.displayName + ': ' + msg;

        this.redisClient.lpush(this.chatroomName, wholeMessage, (err)=>{
            if(err){
                console.log(err);
                this.io.emit('chat error', 'Sorry! Something went wrong.');
                return;
            }
            this.io.emit('chat message', wholeMessage);
            if(cb != null){
                cb();
            }
        })
    }

    onLoadMore(socket, count){
        // allow users to load more messages 
        console.log(-count-20, -count);
        this.redisClient.lrange(this.chatroomName, count, count + 20, (err, messages)=>{
            console.log(messages);
            if(err){
                console.log(err);
                this.io.emit('chat error', 'Sorry! Something else went wrong!');
                return;
            }
            socket.emit('your messages', messages);
        });
    }
}

module.exports = SocketRouter;