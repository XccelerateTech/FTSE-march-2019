x = 8
y = 3

x==y //false
x && y < 10 // true
x || y =< 8 // Syntax error, 8 for x || y <= 8
y === '3'  // false y = 3 not '3' (its a number not a string)
!(x == 5)  // true


function getStock (stock, callback){
    alert(`Getting the stock: ${stock}.`);
    callback();
}

function gotStock(stock){
    alert(`Got stock: ${stock}`)
}

getStock('HSBC', gotStock('HSBC'))

// Alerts: Getting the stock: HSBC

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  function alertFinished(){
    alert('Finished my homework');
  }
  doHomework('math', alertFinished);