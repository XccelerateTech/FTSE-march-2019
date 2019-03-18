$(function () { //short hand for $(document).ready(function() { ... }); -- when the page is ready do all of this.

 //1

    function getCountryData(countryName) {
        return $.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
    }
    //this function when called will return the json file received from the generated url

    function getSunriseSunsetData(latLng) {
        return $.get(`https://api.sunrise-sunset.org/json?${latLng}&formatted=0`);
    }
        //this function when called will return the json file received from the generated url

    
        //the function below turns milliseconds into the type structure of HHMMSS
    function toHHMMSS(milliseconds) {
        var seconds = Math.abs(milliseconds) / 1000;
        var hourDisplayed = Math.floor(seconds / 3600) + "";
        var minuteDisplayed = Math.floor(seconds % 3600 / 60) + "";
        var secondDisplayed = (seconds % 60).toFixed(0) + "";
        return `${hourDisplayed.padStart(2, "0")}:${minuteDisplayed.padStart(2, "0")}:${secondDisplayed.padStart(2, "0")}`;
    }


    $('#form').submit(event => { 
        event.preventDefault(); //prevent default reload


        var countryName1 = $(this).find('[name=firstCountry]').val(); //grab the input values from the form store them in variables
        var countryName2 = $(this).find('[name=secondCountry]').val();

        $.when(getCountryData(countryName1), getCountryData(countryName2)).then(function (countryData1, countryData2) { //when the two iterations of the function getCountryData are finished. Assign value of returned to two callbacks, countryData1 and countryData2

            console.log(countryData1)
            console.log(countryData2)

            var country1 = countryData1[0][0];
            var country2 = countryData2[0][0]; //make the data accessible as a javascript object, store in a variable

            console.log(country1);
            console.log(country2);


            var latLng1 = country1.latlng;
            var latLng2 = country2.latlng; //grab the lat and long from both country objects

            console.log(latLng1);
            console.log(latLng2);


            //now we have the information we need we can call the second function - getSunriseSunsetData
            $.when(getSunriseSunsetData(`lat=${latLng1[0].toFixed(1)}&lng=${latLng1[1].toFixed(1)}`), getSunriseSunsetData(`lat=${latLng2[0].toFixed(1)}&lng=${latLng2[1].toFixed(1)}`)).then(function (sunData1, sunData2) { //when the two iterations of the functions have finished do this
                //store the values that are returned into callbacks, sunData1, sunData2
                var c1Sunrise = new Date(sunData1[0].results.sunrise);
                var c2Sunrise = new Date(sunData2[0].results.sunrise);//make the variables and assign the new times of sunset and sunrise.
                var c1Sunset = new Date(sunData1[0].results.sunset);
                var c2Sunset = new Date(sunData2[0].results.sunset);

                //append the info to the <div id='times'></div>
                $('#times').text(`Sunrise of  ${country1.name} is ${(c1Sunrise - c2Sunrise > 0) ? "Later" : "Earlier"}
                than ${country2.name} by ${toHHMMSS(c1Sunrise - c2Sunrise)}`);

                $('#times').append(`<br/>Sunset of  ${country1.name} is ${(c1Sunset - c2Sunset > 0) ? "Later" : "Earlier"}
                                than ${country2.name} by ${toHHMMSS(c1Sunset - c2Sunset)}`);
            });

        });
    });

});