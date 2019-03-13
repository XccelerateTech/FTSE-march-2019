
        function informMe(endpoint, value, callback) { //create a function which takes three parameters
            let http = new XMLHttpRequest(); //create the XMLHttpRequest
            http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`); //call the api link you want to access - with the 'endpoint' and 'value' inputs from your function - use backticks
            
            http.onreadystatechange = function () { //handle success and errors
                if (http.readyState != XMLHttpRequest.DONE) {
                    return;
                } else if (http.status == 200) {
                    callback(http.responseText) //get data to the DOM
                } else {
                    console.log('error occurred' + http.status);
                }
            }
            http.send();
        }
        
        //get information on Berlin - search by capital city
        informMe('capital', 'berlin', function (data) {
            console.log(JSON.parse(data));//console.log data from the DOM -- JSON.parse() makes the data accessible and readable
        })

        // //get information on all european countries - search by region
        // informMe('region', 'europe', function(data){
        //     console.log(JSON.parse(data));
        // })

        // //get information on all countries using GBP - search by currency
        // informMe('currency', 'GBP', function(data){
        //     console.log(JSON.parse(data));
        // })


        informMe('name', 'poland', function(data){
            console.log(JSON.parse(data))
       


            document.getElementById("placeHolder").innerHTML = JSON.stringify(data)
        })