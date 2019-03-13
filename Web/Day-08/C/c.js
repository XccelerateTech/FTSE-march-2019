//get all the people from the space station
function whoIsInSpace(callback){
    let http = new XMLHttpRequest();
    http.open('GET', `http://api.open-notify.org/astros.json`)

    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE){
            return;
        } else if (http.status == 200){
            callback(http.responseText)
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send()

}

//access all the people in space
whoIsInSpace(function(data){ //call function with callback (can be called anything -- here 'data' is linked to above 'callback') -place holder
    console.log(JSON.parse(data)); //parse data in the function called here 
})

//get the names of the people in the space station

function namesOfWhoIsInSpace(cb){ //create function with callback - the data - placeholder
    let http = new XMLHttpRequest(); //create XMLHttpRequest
    http.open('GET', `http://api.open-notify.org/astros.json`) //call the space station API using the created XMLHttpRequest

    http.onreadystatechange = function (){ //handle success and failure
        if(http.readyState != XMLHttpRequest.DONE){ //if not done, return
            return;
        } else if (http.status == 200){ //on success do this
            let parsed= JSON.parse(http.responseText) //parse the response on the DOM
            cb(parsed.people.map(function(person){ //access information inside the JSON file using map

                //the callback (data) has been parsed - people (the object inside is accessed) - we use map to iterate over each element (which we call person) - we return each "person's" name


                return person.name;//return all the names
            }));
        } else { //otherwise throw and error and why
            console.log('error occurred' + http.status)
        }
    };
    http.send()
}

namesOfWhoIsInSpace(function(cb){ //call function with callback - the data - placeholder
    console.log(cb) //console.log the data
})

