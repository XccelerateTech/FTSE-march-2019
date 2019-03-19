function informUs (endpoint, value, callback){
    let http = new XMLHttpRequest();

            http.open('GET',`https://restcountries.eu/rest/v2/${endpoint}/${value}`); 
//target the file you want to GET

            http.onreadystatechange = function(){//handle error and success

                if(http.readyState != XMLHttpRequest.DONE) {
                    return;

                } else if(http.status == 200) {

                   callback(JSON.parse(http.responseText)); //get data into console 

                } else {

                    console.log('error occurred ' + http.status); //tell user there is an error 
                }
            }

            http.send(); //send the request
}

// informUs('currency', 'USD', function(data){
//     console.log(data)
// })

    
let title = document.getElementsByTagName('h1');
console.log(title)
title[0].innerHTML = "OMFG";

let content = document.getElementsByTagName('p');
content[0].innerHTML = "what ever message you want. "
content[1].innerHTML = "super easy"


let listenedElement = document.getElementsByTagName('h2')
listenedElement[0].onclick= function (){
    alert('I was clicked.')
    listenedElement[0].innerHTML = "I have changed, its not you its me"

    // listenedElement[0].style.color = "#ffffff";
    listenedElement[0].style.border = "1 px";

}