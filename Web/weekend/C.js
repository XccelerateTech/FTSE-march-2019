setTimeout(function(){
    console.log('I logged after every three seconds');

}, 3000);

function logger(){
    console.log('I log every three seconds')
}

setInterval(logger, 3000)