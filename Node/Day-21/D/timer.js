const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }

    countDown(seconds) {
        let timePassed = 0;
        const interval = setInterval(emitInterval, 1000);
        const that = this;
        
        function emitInterval() {
            var remaining = seconds - timePassed;

            if (remaining == 0) {
                clearInterval(interval);
            }
            
            that.emit('tick', remaining);
            timePassed += 1;
        }
    }
}

module.exports = Timer;

/*

//explaining this and that

In the class below, we save this to a variable named that.

We are doing this because of the contextual nature of this.
this refers usually to the parent or class where we call this. Below in the function tellHim we have a nested function, extra. we console.log(this) within tell him as well as extra. Within tellHim this refers to the instance of the object that was created. While the this in extra is undefined. Now we also stored the this from tellHim() into a variable named that.

We console.log(that) in our extra function, we are returned the same object instance as the console.log in tellHim().

class Person {
  constructor(options){
  
    this.name = options.name;
    this.age = options.age;
  }

  tellMe(){
    console.log(`${this.name} is ${this.age} year's old`)
  }

  tellHim(){
    const that = this;

    console.log(this)
    function extra(){
      console.log(this)
      console.log('hello')
      console.log(that);
    }
    extra();
  }


}

const tim = new Person({name: 'tim', age: 19})

tim.tellMe();
tim.tellHim();



*/