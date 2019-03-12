//Older Ans
function Person(name, age){
    this.name = name;
    this.age = age;

}

var person1 = new Person('Jimmy', '44');
console.log(person1);


//ES6
class Person{
    constructor(options){
      this.name = options.name;
      this.age = options.age
    }
  
    introduce(){
      return `${this.name} say's hello. He is ${this.age} years old.`
    }
  }
  
  var person1 = new Person({name:'Jeremy', age:44})
  console.log(person1.introduce())