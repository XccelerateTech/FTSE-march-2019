/* Create a function that takes an array as parameter. The array consist of three numbers. Return the index of the number that lies between the other two numbers. */


//method one if else statements using Math.max

function middle(input){ //define function and inputs
    let maxNum = Math.max(...input); //define max number of input (... is for arrays)
    let minNum = Math.min(...input); //define min number of input
  
    if (input[0] > minNum && input[0] < maxNum){ //if number at index 0 is larger than then smallest number AND smaller than the largest number do this:
        return  input.indexOf(input[0]) //return the index of input[0]

    } else if (input[1] > minNum && input[1] < maxNum){ //if number at index 1 is larger than then smallest number AND smaller than the largest number do this
          return  input.indexOf(input[1]) //return the index of input[1]
    
    } else {
      return  input.indexOf(input[2]) //return the index of input[3]
    }
  } 
  
  array = [11,22,15]
  middle(array)

//method two
function middle(inputArray) {
    // first sort the array, in order not to affect the original array we make a copy of the array using .slice(). Then we sort the copy of the new array and store it in a new variable. Since the numbers are always three, using the middle number of the ordered array will be the number we need
    var ordered = inputArray.slice().sort(function(a, b) {
        return a - b;
    });
    // find the index position of the middle value in the ordered array. That is the value we want to return
    return inputArray.indexOf(ordered[1]);
}

console.log(middle([1,6,5])); // 2