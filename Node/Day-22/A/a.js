//Function declaration

function processArray (array , cb){
    const results = [];

    for (let elem of array){
        results.push( cb ( elem ) )
    };

    return results;
};

//Define array
const myArray = [3, 6, 9, 12, 15];

//call function in a console.log (to see output) here we call the function and define the callback function within the function call.
console.log(processArray(myArray, function(b){
    return b/3;
}));
//[1,2,3,4,5]

//Define a function that can be given as a callback function to the processArray function
function adder5 (a){
    return a+5
};

//call the process array function, and pass the declared function into the function call.
//processArray will execute the adder5 function. 
console.log(processArray(myArray, adder5));
//[8,11,14,17,20]


const timeser8 =(a)=>{
    return a * 8
}

console.log(processArray(myArray, timeser8));
//[24,48,72,96,120]



//Extra you are welcome to test
// processArray([4, 8, 2, 7, 5], function(a) {
//     return a * 2;
// });

// [8,16,4,14,10]

/* 

Newer syntax
const processArray = (myArray, cb) => {
    const results = [];

    for (let elem of array){
        results.push(cb(elem))
    };

    return results;
};

*/
