module.exports =
 
{
    start: function(timer, seconds){
        timer.emit('start', seconds);
    },
    stop: function(timer){
        timer.emit('stop');
    },
    pause: function(timer){
        timer.emit('pause')
    }
};