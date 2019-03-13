var http = new XMLHttpRequest();

http.open("GET", "/data/data.json")

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();