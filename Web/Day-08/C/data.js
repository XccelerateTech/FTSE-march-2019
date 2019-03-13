
//add url ${endpoint/${value}}

function whoIsInSpace(callback) {
    var http = new XMLHttpRequest();


http.open('GET', `http://api.open-notify.org/astros.json`, true)


http.onreadystatechange = function () {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText)
        // let data = JSON.parse(http.responseText);
        callback(http.responseText); //get data into DOM
    } else {
        console.log('error occurred' + http.status);
    }
}
    http.send();
}

//invoke function ==> callback function
whoIsInSpace(function (data){
         let parsedData =  JSON.parse(data);
    console.log(parsedData);
    let arr = parsedData.people.map(function(p){
        return p.name;
    })
    console.log(1)
console.log(arr)
})

//map

// C Write a function called whoIsInSpace(), it should return an array with the names of all people in space.   To get the names make a XMLHttpRequest to the International Space Station.

// Hint:

// If you want to get the names from the site, you can do so by using data.people[x].name once you pass the http.responseText into the data variable.
// See the [x] in the data.people[x].name? Maybe the JSON object received has an array?
// Remember to JSON.parse() the http.responseText.


function whoIsInSpace1() {
    var http = new XMLHttpRequest();


http.open('GET', `http://api.open-notify.org/astros.json`, true)


http.onreadystatechange = function () {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        
        let data = JSON.parse(http.responseText);
    let arr = data.people.map(function(p){
        return p.name;
    })
    console.log(2)
    console.log(arr)

        
    } else {
        console.log('error occurred' + http.status);
    }
   
   
}


    http.send();
}

whoIsInSpace1();