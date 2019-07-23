// class Human {
//     constructor(options){
//         this.firstName = options.firstName,
//         this.lastName = options.lastName,
//         this.height = options.height,
//         this.weight = options.weight,
//         this.family = options.family
//     }

//      fullName(){
//         console.log( `${this.firstName} ${this.lastName}`);
//     }
// }


// class Person {
//     constructor(age) {
//         this.age = age;
//     }

//     get Age() {
//          console.log(`I am ${this.age} years old.`);
//     }

//     set Age(age) {
//         this.age = age;
//     }
// }

// var person = new Person(25);

// person.Age 
// person.Age = 26;
// person.Age 

// var human = new Human({
//     firstName : 'Ted',
//     lastName : 'Johnson',
//     weight : 150,
//     height: 190,
//     family : ['Mother', 'Father', 'Sister']
// })

// console.log(human.firstName)

// human.fullName();


"use strict";

function Archiver() { 
  var temperature = null; 
  Object.defineProperty(this, 'temperature', { 
    get: function() { 
      console.log('get!'); 
      return temperature; 
    }

    
  });
}

var arc = new Archiver(); 
arc.temperature; // 'get!'

    // arc.temperature = 30;
