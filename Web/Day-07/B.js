//old method

function Player(name, health){
    this.name = name;
    this.health = health;
}

Player.prototype.attack = function(player){
    player.health = Math.max(0, player.health - 10);
    console.log(this.name+ ' (hp: '+this.health+') attacks '+player.name+ ' (hp: '+player.health+')');
}

let jim = new Player('Jim', 100);
let thor = new Player('Thor', 100);

while (jim.health > 0 && thor.health > 0){
    if(Math.floor(Math.random()*2) === 0){
        jim.attack(thor)
    } else {
        thor.attack(jim)
    }
}

// new method

class Player {
    constructor(options){
      this.name = options.name;
      this.health = options.health;
    }
    
    attack(player){
      player.health = Math.max(0, player.health - 10);
      console.log(this.name+ ' (hp: '+this.health+') attacks '+player.name+ ' (hp: '+player.health+')');
      if(player.health < 0 ){
        console.log(`${this.player.name} died`)
      }
  
    }
  }
  
  let player1 = new Player({name: 'John', health: 100});
  let player2 = new Player({name: 'Tim', health: 100});
  
  while (player1.health > 0 && player2.health > 0){
      if(Math.floor(Math.random()*2) === 0){
          player1.attack(player2)
      } else {
          player2.attack(player1)
      } if(player1.health <= 0){
        console.log(player1.name+' is finally dead')
      } if(player2.health <= 0) {
        console.log(player2.name+' is finally dead')
  
      }
  
  }
  