
function multiplyNumber(number) {
    if(isNaN(number)|| number <= 0) {
        return "ERROR";
    }

    if(number > 1000000) {
        return number;
    }

    while(number < 1000000) {
        number *= 10;
    }
    
    return number;
}

