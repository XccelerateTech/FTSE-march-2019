const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter {}

let myEmitter = new MyEventEmitter();
myEmitter.on('person', (name)=>{
    console.log(`${name} called me`);
});

myEmitter.on('finished', (job) =>{
    console.log(`This ${job} has been finished`)
})

module.exports = myEmitter