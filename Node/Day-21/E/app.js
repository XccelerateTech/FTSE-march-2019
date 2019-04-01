var start = require('./timer-utils').start;
var stop = require('./timer-utils').stop;
var pause = require('./timer-utils').pause;

var Timer = require('./timer')

const timer = new Timer();

timer.on('tick', function(remaining){
    if(remaining == 0){
        return console.log('kaboom');
    }
    console.log("Time remaining: "+remaining);
})


start(timer, 6);

setTimeout(()=> pause(timer), 2000);
setTimeout(()=> start(timer), 4000);
setTimeout(() => stop(timer), 8000);