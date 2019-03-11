const alphabet = "jabcdefgh"; //letters assigned to index

function transform(number){ //declare function

    let numberArray = number.split(''); //turn number input into array

    let letterArray = numberArray.reduce(function(acc, char){ //iterate over each element of the number array
        acc.push(alphabet[char]); //select which letter to push depending on its position in index
        return acc; //return the letter
    }, []) //push the letters into the empty array

    letterArray.sort();

    let sortedLetterArray = letterArray.join('');
    return sortedLetterArray;

}

transform('0987654321')