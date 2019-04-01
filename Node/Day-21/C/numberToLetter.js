let randomNumber = require('./number');
let numberToLetter = require('./randomLetters');

function text(lengthOfText){
    let randomLetters = ''
    for(let i= 0; i < lengthOfText; i ++){
        randomLetters += numberToLetter(randomNumber());
        console.log('wow', randomLetters)
    }
    return randomLetters;
}

module.exports = text;