var KEYS= {
    "6":"a", "1":"b", "7":"d", "4":"e",
    "3":"i", "2":"l", "9":"m", "8":"n",
    "0":"o", "5":"t"
}

function maya(number){
    if (number < 100 || number > 999999) {
        throw new Error("Invalid Number!");
    }

    var numberString = number.toString();
    var result = "";

    for (var numberChar of numberString) {
        result += KEYS[numberChar];
    }
    return result;
}

