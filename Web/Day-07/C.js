//Declare and define class --> method one
function Gambler(cash, bet){
    this.cash = cash;
    this.bet = bet;
}

Gambler.prototype.lose = function (){
    this.cash -= Math.min(this.cash, this.bet);
}

//use the 'new' keyword to initialize new instances (create the gamblers from the class)
var gambler1 = new Gambler(100,20);
var gambler2 = new Gambler(100,15);

var outOfCashOrder = [];
var round = 0;

//business logic for the problem
function play(name, currentGambler, probability){
    if(currentGambler.cash > 0){
        if(Math.random() < probability){
            currentGambler.lose();
            console.log('Gambler '+name+' lost, $'+currentGambler.cash+' remaining');
            if(currentGambler.cash<=0){
                console.log('Gambler '+name+' ran out of cash');
                outOfCashOrder.push(name);
            }
        }
    }
}

function casino () {
    play('Jim', gambler1, 0.6);
    play('Bob', gambler2, 0.5);
}

//stage
console.log('Casino bets are in!');
while(gambler1.cash > 0 || gambler2.cash > 0){
    round ++;

    console.log('---- Round '+round+ ' ----')
    casino();
}

console.log('The order of players that ran out of cash:', outOfCashOrder);






//method two

// class Gambler { //create a class called Gambler - use to initialize the gamblers
//     constructor(options){ //the properties needed when creating the gambler objects
//       this.cash = options.cash;
//       this.bet = options.bet;
//       this.lossProbability = options.lossProbability;
//     }
//     lose(){ //function every gambler has, to indicate how much money the gambler uses --> points to the bet of the initialized gambler - instances cash - bet.
//       this.cash -= Math.min(this.cash, this.bet)
//     }
//   }
  
//   var gambler1 = new Gambler({cash:100,bet:15,lossProbability:0.6}); //create new gamblers -- who will have cash, a bet amount and a loss probability
//   var gambler2 = new Gambler({cash:120,bet:10,lossProbability:0.4});  

//   //keep track of the number of rounds played, here we start a counter called round.
//   var round = 0;
//     var outOfCashOrder = []; //create an empty array to store the fools who lost all their cash
  
//   let play = function (name, currentGambler) { //we have set up the players, defined some features of the game, here is the logic to see if someone wins or loses.
//     if(currentGambler.cash > 0){
//           if(Math.random() < currentGambler.lossProbability){ 
//               currentGambler.lose();
//               console.log('Gambler '+name+' lost, $'+currentGambler.cash+' remaining');
//               if(currentGambler.cash<=0){
//                   console.log('Gambler '+name+' ran out of cash');
//                   outOfCashOrder.push(name);
//               }
//           }
//       }
//   }

//   //using Math.random(), to check if the current gambler has lost money or not. 
  
//   let casino =function () { //here is the stage of the casino
//     play('Jim', gambler1); //call play() method with the parameters needed.
//     play('Bill', gambler2)
//   }
//   console.log('Casino bets are in!');
//   while(gambler1.cash > 0 || gambler2.cash > 0){ //logic to keep the game going until they have lost all thier money
//       round ++;
  
//       console.log('---- Round '+round+ ' ----')
//       casino(); //invoke the function, let them play
//   }
  
//   console.log('The order of players running out of cash:', outOfCashOrder);
  