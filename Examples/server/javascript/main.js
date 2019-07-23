var http = new XMLHttpRequest();

console.log('step 1');
http.open("GET", "https://restcountries.eu/rest/v2/name/china")

console.log('step 2');

http.onreadystatechange = function() {
    console.log('step 5');

    if(http.readyState != XMLHttpRequest.DONE) {
        console.log(http.readyState)
        return;
    } else if(http.status == 200) {
        console.log('step 6');

        console.log(JSON.parse(http.responseText));
    } else {
        console.log('error occurred' + http.status);
    }
}
console.log('step 3');

// onreadystatechange should be before http.send()
http.send();
console.log('step 4');
