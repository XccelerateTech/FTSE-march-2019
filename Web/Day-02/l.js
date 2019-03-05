
function occurrence(string,targetChar) {
    var count = 0;
    var lowerCaseTargetChar = targetChar.toLowerCase();
    for (var char of string.toLowerCase()) {
        if (char == lowerCaseTargetChar) {
            count++;
        }
    }
    return count;
}