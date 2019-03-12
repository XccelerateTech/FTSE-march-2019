class Person {
    constructor(options){
      this.name = options.name;
      this.age = options.age;
    }
    info(){ // two methods to return the value of info - console.log 
    //return --> use backticks and place objects using '${}' into the returned string 
      console.log('The person is called '+ this.name+ ' and is ' + this.age + ' years old');
        return `The person is called ${this.name} and is ${this.age} years old`
    }
  }
  
  const person = new Person ({age: 44, name: 'Tom'})
  
  person.info();
