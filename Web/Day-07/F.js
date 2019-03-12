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
  
//   person.info();


class Student extends Person { //extends will take the propertiesof the parent class
    constructor(options){ //so that we inherit methodsfrom the parent class, also so that we can add in further parameters for the object
        super(options);
        this.gpa = options.gpa;
    }

    info(){
        return `The student called ${this.name} is ${this.age} years old. He has an overall GPA of ${this.gpa} at the university.`
    }
}

const student = new Student ({age: 44, name: 'Tom', gpa: 4.0})

student.info()