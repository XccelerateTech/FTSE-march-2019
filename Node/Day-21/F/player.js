const EventEmitter = require('events');

class Player extends EventEmitter{
    constructor(referee){
        super();
        this.referee = referee;
    }
    play(input){
        this.referee.emit('playerReady', input);
    }
}

module.exports = Player;