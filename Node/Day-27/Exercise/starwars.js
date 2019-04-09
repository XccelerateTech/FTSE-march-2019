
class Jedi{
    constructor(name,power,health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    attack(sith){
        var damage = Math.random() *this.power ;
        sith.injure(damage);
        console.log('I am actually hitting the sith')

    }

    injure(damage){
        this.health -= damage
    }

    dead(){
        return this.health < 0;
    }
}

class Sith{
    constructor(name,power,health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    attack(jedi){
        var damage = Math.random() *this.power;
        jedi.injure(damage);
        console.log('I am actually hitting the jedi')
    }
    injure(damage){
        this.health -= damage
    }
    dead(){
        return this.health < 0;
    }
}



function duel(obiwan , anakin){


    console.log("Obiwan and anakin yelled at each other.And then they started to fight.")

    for(let i = 0;i<4;i++){
        obiwan.attack(anakin);
        anakin.attack(obiwan);    
    }

    console.log("They fought above the lava.")

    for(let i = 0;i<2;i++){
        obiwan.attack(anakin);
        anakin.attack(obiwan);    
    }


    console.log("Obiwan stepped on the bank of the river. Anakin tried to gain a upperhand by jumping recklessly. Obiwan severed his left arm and both legs ")
    anakin.injure(anakin.health-10);

    if(anakin.dead()){
        console.log("Obiwan regretted for letting Anakin fallen to the dark side.")
    }
    console.log("Obiwan took away anakin's lightsaber and left him to death.")

    setTimeout(function(){
        console.log("Anakin is rescued by Darth Sidious and completely transformed to the look of Darth Vader we normally known.")
        anakin.health = 800;
        anakin.power = 90;
    },5000);
}

// const obiwan = new Jedi("Obiwan Kenobi",70,700);
// const anakin = new Sith("Anakin Skywalker",100,1000);

// duel(obiwan,anakin);


module.exports = {
    duel,
    Sith,
    Jedi
}
