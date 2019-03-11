//method one using javascript reverse function

// function reverse (number) {
//     // turn number into a string
// let stringNumber = number.toString();

// let numberArray = []; 


// for (let i = 0; i < stringNumber.length; i ++){
//   numberArray.push(+stringNumber.charAt(i))     // turn string into an array

// }
// var reversed = numberArray.reverse(); //use function reverse to reverse the array

// return reversed     // return the new array of numbers

// }

// reverse(12345)

//method two using map and sort
function reverse(number) {
    // turn number into a string
    var numberString = number.toString();
    // turn string into an array
    var arrayOfStrings = numberString.split('');
    // sort the array according to our logic
    var sortedArray = arrayOfStrings.sort(function(a, b) {
        return b > a;
    });
    // turn the strings in the sorted array into numbers
    var arrayOfNumbers = sortedArray.map(function(n) {
        return Number(n);
    });
    // return the new array of numbers
    return arrayOfNumbers;
}

console.log(reverse(123));
