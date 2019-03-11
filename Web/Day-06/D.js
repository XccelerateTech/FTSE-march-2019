//first method reduce
let results = [90, 87, 82, 85, 69, 93, 83, 79, 81, 99]

let averageResult = (
    (results.reduce(function(acc, currentVal){
        return acc + currentVal;
    }, 0)
) / results.length).toFixed();

console.log('First Method: ' + averageResult)

//for loop
function average(results){
    let sum = 0;
    for(var result of results){
        sum += result;
    }
    return parseInt((sum / results.length).toFixed(0));
}

console.log('Second Method: ' + average(results))