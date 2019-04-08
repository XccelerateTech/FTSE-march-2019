
const tripler = (number) => {
    return number * 3;
}

function logger (input) {
    return console.log(input);
}

let adder = function (parameter1, parameter2) {
    return parameter1 + parameter2;
}

module.exports = tripler;
module.exports.logger = logger;
module.exports.adder = adder;