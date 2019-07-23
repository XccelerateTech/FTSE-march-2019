
//2
$('#form').on('submit', function (e) {
    e.preventDefault();
    var oldDay = new Date(new Date().getTime() - 86400 * 1000); //initiate a new time (using new Date()), minus one day in milliseconds, store in variable oldDay

    var nextDay = new Date(new Date().getTime() + 86400 * 1000); // initiate a new time (using new Date()), plus one day in milliseconds, store in variable nextDay


    var data = $('#form').serialize();  //serialize the data from the from submission, so that we can access it like an object, store in variable data
    // Call with the input longitude and latitude check for today, since no date and no manually added latitude and longitude are passed in, first two parameter are 0. The callback of callApi call the timeDifference function to calculate the time. The callback of this function will return the time difference which we can put out into the HTML
    console.log(data)

    callApi(new Date(), data, today => { //kind of call back hell (hard to read and hard to understand what closes where)
        callApi(oldDay, data, yesterday => { //the callback is today, yesterday and tomorrow here. 
            callApi(nextDay, data, tomorrow => {

                console.log(today);
                console.log('yesterday ', yesterday)
                console.log('tomorrow ', tomorrow)


                var sunrisesTime = [new Date(today.sunrise), new Date(yesterday.sunrise), new Date(tomorrow.sunrise)]; //declare an array, sunrisesTime and store three dates, today.sunrise, yesterday.sunrise and tomorrow.sunrise

                var sunsetsTime = [new Date(today.sunset), new Date(yesterday.sunset), new Date(tomorrow.sunset)];//declare an array, sunsetTime and store three dates, today.sunset, yesterday.sunset and tomorrow.sunset\

                console.log(sunrisesTime)


                var now = new Date(); //declare a variable now, store inside a new Date() - gets the time from right now


                var nextSunrise = sunrisesTime.find(function (sunrise) {
                    return (sunrise - now) > 0;
                });

                var nextSunset = sunsetsTime.find(function (sunset) {
                    return (sunset - now) > 0;
                });

                var pastSunrises = sunrisesTime.filter(function (sunrise) {
                    return (now - sunrise) > 0
                }).sort();

                var pastSunsets = sunsetsTime.filter(function (sunset) {
                    return (now - sunset) > 0
                }).sort();

                var prevSunrise = pastSunrises[1]; //store both previousSunrise and Sunset in variables so that they can be called to check the time difference
                var prevSunset = pastSunsets[0];

                console.log(now)
                console.log(pastSunrises)
                console.log(prevSunrise)

                $('#times').append("The time difference between previous sunrise and now is " + toHHMMSS(now - prevSunrise) + "<br/>"); //    E
                $('#times').append("The time difference between next sunrise and now is " + toHHMMSS(nextSunrise - now) + "<br/>"); //E
                $('#times').append("The time difference between previous sunset and now is " + toHHMMSS(now - prevSunset) + "<br/>"); // E
                $('#times').append("The time difference between next sunset and now is " + toHHMMSS(nextSunset - now) + "<br/>"); // E

                $('#times').append("The time difference between yesterday sunrise and now is " + toHHMMSS(now - new Date(yesterday.sunrise)) + "<br/>"); //E
                $('#times').append("The time difference between yesterday sunset and now is " + toHHMMSS(now - new Date(yesterday.sunset)) + "<br/>"); //E
                $('#times').append("The time difference between tomorrow sunrise and now is " + toHHMMSS(new Date(tomorrow.sunrise) - now) + "<br/>"); //E
                $('#times').append("The time difference between tomorrow sunset and now is " + toHHMMSS(new Date(tomorrow.sunset) - now) + "<br/>"); //E


            });
        });
    });






});

//3 F

$('#btn').on('click', function (e) { //compare the location against Hong Kong's sunrise and sun set.
    e.preventDefault();

    callApi(new Date(), $('#form').serialize(), inputPlace => {
        callApi(new Date(), 'lat=22.25&lng=114.16666666', hongKong => {

            var hongKongDiff = new Date(hongKong.sunset) - new Date(hongKong.sunrise);
            var inputDiff = new Date(inputPlace.sunset) - new Date(inputPlace.sunrise);

            if (inputDiff > hongKongDiff) {

                $('#results').append('Your input has a longer day time than Hong Kong')


            } else {

                $('#results').append('Your input has a shorter day time than Hong Kong')
            }
        });

    });
});






//1
//create a function called callApi, it takes three inputs, date, latLng and a callback
function callApi(date, latLng, cb) {
    $.ajax({ //function sets of an Ajax get request
        type: 'GET',
        // call api, manually define date so that any date can be called
        url: `https://api.sunrise-sunset.org/json?${latLng}&date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&formatted=0`, //add in the lat&lng to the query string and then add in the dates (full date)
        dataType: "json", //define datatype not entirely needed.

        //https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0

    }).done(function (data) {
        console.log(data)
        cb(data.results); //make the returned information usable outside of the function.   console.log(data.results)

    }).fail(function (err) {
        console.log('error', err);
    });
}

function toHHMMSS(milliseconds) { //change the time from time in seconds to date in the correct format
    var seconds = milliseconds / 1000;
    var hourDisplayed = Math.floor(seconds / 3600) + "";
    var minuteDisplayed = Math.floor(seconds % 3600 / 60) + "";
    var secondDisplayed = (seconds % 60).toFixed(0) + "";
    return `${hourDisplayed.padStart(2, "0")}:${minuteDisplayed.padStart(2, "0")}:${secondDisplayed.padStart(2, "0")}`;
}