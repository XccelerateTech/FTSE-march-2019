var g = 'I am the g string'

var b = 'I am the b string'


function sayHello (){
    console.log('hello world');
}

sayHello();

var adder = function(a,b){
    console.log(a+b);
}

var sum = 1+2;

adder(9, 7);

const multiplyer = (x, y) => {
    console.log(x*y)
}

multiplyer(2,5); //output: 10

const logger = (g,k) => {
    console.log(g);
    console.log(k);
    // logic to output the input
}

logger(g, b);


let number = 8.9685427845

const twoDecimalPlaces= (x)=>{
    console.log(Number(x).toFixed(2));
}

twoDecimalPlaces(number);


switch(x,a,b) {
    case '+':
    return a+b
        break;
    case '-':
    return a-b;
        break;
    default:
    }