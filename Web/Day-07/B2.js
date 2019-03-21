
//method one

function Player(name, health){ // construct players 
    this.name = name;
    this.health = health;
}

Player.prototype.attack = function(player){ //create player functions using prototype
    player.health = Math.max(0, player.health - 10);
    console.log(this.name+ ' (hp: '+this.health+') attacks '+player.name+ ' (hp: '+player.health+')');
}

Player.prototype.heal = function(){
  this.health += 5;
  console.log(this.name+ ' (hp: '+this.health+') heals him/herself')
}

let jim = new Player('Jim', 100); //initialize players
let thor = new Player('Thor', 100);

let lastAttacker = null; 
let attackInARow = 0;
var aggressor, defender;

while (jim.health > 0 && thor.health > 0){ //start the fight
    if(Math.floor(Math.random()*2) === 0){
      aggressor = jim;
      defender = thor;

    } else {
      aggressor = thor;
      defender = jim;
    }

    aggressor.attack(defender);
    if(aggressor === lastAttacker){
      attackInARow ++;
      if(attackInARow % 3 == 0){
        aggressor.heal();
      }
    } else {
      lastAttacker = aggressor;
      attackInARow = 1;
    };

   
}

//method two

class Player{
  constructor(properties){
    this.name = properties.name;
    this.health = properties.health;
  }
  attack(player){
    player.health = Math.max(0, player.health - 10);
    console.log(this.name+ ' (hp: '+this.health+') attacks '+player.name+ ' (hp: '+player.health+')');
  }

  heal(){
    this.health += 5;
  console.log(this.name+ ' (hp: '+this.health+') heals him/herself')
  }
}

let player1 = new Player({name: 'Jim', health: 100}); //initialize players
let player2 = new Player({name: 'Thor', health: 100});

// let lastAttacker = null; 
// let attackInARow = 0;
// var aggressor, defender;

// while (player1.health > 0 && player2.health > 0){ //start the fight
//     if(Math.floor(Math.random()*2) === 0){
//       aggressor = player1;
//       defender = player2;

//     } else {
//       aggressor = player2;
//       defender = player1;
//     }
     

//     aggressor.attack(defender);
//     if(aggressor === lastAttacker){
//       attackInARow ++;
//       if(attackInARow % 3 == 0){
//         aggressor.heal();
//       }
//     } else {
//       lastAttacker = aggressor;
//       attackInARow = 1;
//     }
    
// if(player1.health <= 0){
//         console.log(player1.name+' is finally dead')
//       } if(player2.health <= 0) {
//         console.log(player2.name+' is finally dead')
  
//       }
   
// }

//final method for the actual fight - making the fight a function 

function fightToTheDeath (player, player1) {
let lastAttacker = null; 
let attackInARow = 0;
var aggressor;
var defender;

while (player.health > 0 && player1.health > 0 ) { //start the fight
    
  if(Math.floor ( Math.random () * 2 ) === 0 ) {
      aggressor = player;
      defender = player1;
    } else {
      aggressor = player1;
      defender = player;
    };

    aggressor.attack(defender);
    
    if(aggressor === lastAttacker ) {
      attackInARow ++;
      if(attackInARow % 3 === 0 ) {
        aggressor.heal();
      };
    } else {
      lastAttacker = aggressor;
      attackInARow = 1;
      console.log(lastAttacker);
    };
   
}; 
console.log ('Someone has died, but who?');
  
};

fightToTheDeath (jim, thor);