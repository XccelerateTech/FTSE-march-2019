"use strict";

class FlyingAnimal {
    fly(){
      console.log(`A ${this.type} can fly`);
    }
  };
  
  class SwimmingAnimal {
    swim(){
      console.log(`A ${this.type} can swim`)
    }
  }
  
  class Bat extends FlyingAnimal {
    constructor(){
      super()
      this.type = 'Bat';
    }
  
    feed(){
      console.log(`A ${this.type} is feeding milk`)
    }
  }
  
  class Whale extends SwimmingAnimal {
    constructor(){
      super();
      this.type = 'Whale';
    }
  
    feed(){
      console.log(`A ${this.type} is feeding milk`)
    }
  }
  
  
  class Fish extends SwimmingAnimal {
    constructor(){
      super();
      this.type = 'Fish';
    }
  
    reproduce(){
      console.log(`A ${this.type} lays eggs`)
    }
  }
  
  class Bird extends FlyingAnimal {
    constructor(){
      super();
      this.type = 'Bird'
    };
  
    reproduce(){
      console.log(`A ${this.type} lays eggs`)
    }
  }
  
  var bat = new Bat();
  bat.fly();
  bat.feed();
  bat.swim();
  
  console.log(bat.fly(), bat.feed())

  var bird = new Bird();
  bird.fly();
  bird.reproduce();
  
  var fish = new Fish();
  fish.swim();
  fish.reproduce();
  
  var whale = new Whale();
  whale.swim();
  whale.feed();
    
  
  /* 
  
  Bat : A Bat can fly and feed milk
  Fish : A Fish can swim and lay eggs
  Whale : A Whale can swim and feed milk
  Bird : A Bird can fly and lay eggs
  
 
 console.log(bat.constructor.name);  

 console.log(fish.constructor.name);  
 
 console.log(whale.constructor.name);  
 
 console.log(bird.constructor.name);

   */