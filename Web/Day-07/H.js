"use strict";

class BaseFlying {
    constructor(type) {
        this.type = type;
    }

    fly() {
        console.log(`${this.type} is flying.`);
    }
}

class BaseSwimming {
    constructor(type) {
        this.type = type;
    }

    swim() {
        console.log(`${this.type} is swimming.`);
    }
}

class BaseLaying {
    constructor(type) {
        this.type = type;
    }

    lay() {
        console.log(`${this.type} is laying eggs.`);
    }
}

class BaseFeeding {
    constructor(type) {
        this.type = type;
    }

    feed() {
        console.log(`${this.type} is feeding milk.`);
    }
}

class Bat {
    constructor() {
        this.flyer = new BaseFlying('Bat');
        this.feeder = new BaseFeeding('Bat');
    }

    fly() {
        this.flyer.fly();
    }

    feed() {
        this.feeder.feed();
    }
}

class Fish {
    constructor() {
        this.swimmer = new BaseSwimming('Fish');
        this.layer = new BaseLaying('Fish');
    }

    swim() {
        this.swimmer.swim();
    }
    
    lay() {
        this.layer.lay();
    }
}

class Whale {
    constructor() {
        this.swimmer = new BaseSwimming('Whale');
        this.feeder = new BaseFeeding('Whale');
    }
    
    swim() {
        this.swimmer.swim();
    }
    
    feed() {
        this.feeder.feed();
    }
}

class Bird {
    constructor() {
        this.flyer = new BaseFlying('Bird');
        this.layer = new BaseLaying('Bird');
    }
    
    fly() {
        this.flyer.fly();
    }

    lay() {
        this.layer.lay();
    }
}

var bat = new Bat();
bat.fly();
bat.feed();

var fish = new Fish();
fish.swim();
fish.lay();

var whale = new Whale();
whale.swim();
whale.feed();

var bird = new Bird();
bird.fly();
bird.lay();

/* 

Bat : A Bat can fly and feed milk
Fish : A Fish can swim and lay eggs
Whale : A Whale can swim and feed milk
Bird : A Bird can fly and lay eggs

*/
