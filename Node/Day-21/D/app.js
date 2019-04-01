
var Timer = require('./timer')

const timer = new Timer();

timer.on('tick', function(remaining){
    if(remaining == 0){
        return console.log('kaboom');
    }
    console.log("Time remaining: "+remaining);
})

timer.countDown(3);