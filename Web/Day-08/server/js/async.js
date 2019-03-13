
//create a new XHLHttpRequest
let http = new XMLHttpRequest();
            http.open('GET','../data/data.json'); //target the file you want to GET
            http.onreadystatechange = function(){//handle error and success
                if(http.readyState != XMLHttpRequest.DONE) {
                    return;
                } else if(http.status == 200) {
                    console.log(JSON.parse(http.responseText)); //get data into console 
                    function myFunc(){
                                            document.getElementById("placeHolder").innerHTML(JSON.parse(http.responseText))

                    }
                    myFunc();

                } else {
                    console.log('error occurred' + http.status); //tell user there is an error 
                }
            }
            http.send(); //send the request