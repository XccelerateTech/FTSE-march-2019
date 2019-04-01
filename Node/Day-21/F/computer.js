const EventEmitter = require('events');

class Computer extends EventEmitter{
    constructor(referee){
        super();
        this.referee = referee;
        this.on('computerTurn', function (){
            this.computerPlay()
        });
 }
        computerPlay(){
            const choices = ['rock', 'paper', 'scissors']
            const num = Math.floor(Math.random() * 3);
            this.referee.emit('computerReady', choices[num])
        }
}

module.exports = Computer;