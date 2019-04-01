const letters = 'abcdefghijklmnopqrstuvwxyz'

module.exports = function (index) {
    console.log(index);
    return letters[index % 26];
}