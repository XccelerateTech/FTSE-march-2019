

$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault();

        var data = $("#form").serialize();

        var oldDay = new Date(new Date().getTime() - 86400 * 1000);
        var newDay = new Date(new Date().getTime() + 86400 * 1000);
        console.log(data)

        let today =  $.ajax({
            type: "GET",
            url:  `https://api.sunrise-sunset.org/json?${data}&date=${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}&formatted=0`,
            dataType: "json"
        })

        let yesterday =  $.ajax({
            type: "GET",
            url:  `https://api.sunrise-sunset.org/json?${data}&date=${oldDay.getFullYear()}-${oldDay.getMonth()+1}-${oldDay.getDate()}&formatted=0`,
            dataType: "json"
        })

        let tomorrow =  $.ajax({
            type: "GET",
            url:  `https://api.sunrise-sunset.org/json?${data}&date=${newDay.getFullYear()}-${newDay.getMonth()+1}-${newDay.getDate()}&formatted=0`,
            dataType: "json"
        })
        
        $.when(today, yesterday, tomorrow).done(function(todayData, yesterdayData, tomorrowData){
            console.log(todayData);
            console.log(yesterdayData);
            console.log(tomorrowData);

            var sunrisesTime = [new Date(todayData[0].results.sunrise), new Date(yesterdayData[0].results.sunrise), new Date(tomorrowData[0].results.sunrise)];

            var sunsetsTime = [new Date(todayData[0].results.sunset), new Date(yesterdayData[0].results.sunset), new Date(tomorrowData[0].results.sunset)]

            console.log(sunrisesTime);
            console.log(sunsetsTime)

            let now = new Date();
            var nextSunrise = sunrisesTime.find(function(sunrise){ 
                return (sunrise - now) > 0;
            });

            var nextSunset = sunsetsTime.find(function(sunset){
                return (sunset - now) > 0;
            });

            var pastSunrises = sunrisesTime.filter(function(sunrise){
                return (now - sunrise) > 0
            }).sort();

            var pastSunsets = sunsetsTime.filter(function(sunset){
                return (now - sunset) > 0
            }).sort();

            var prevSunrise = pastSunrises[1]; //store both previousSunrise and Sunset in variables so that they can be called to check the time difference
            var prevSunset = pastSunsets[0];


            $('#times').append("The time difference between previous sunrise and now is "+toHHMMSS(now-prevSunrise)+"<br/>"); //    E
            $('#times').append("The time difference between next sunrise and now is "+toHHMMSS(nextSunrise - now)+"<br/>"); //E
            $('#times').append("The time difference between previous sunset and now is "+toHHMMSS(now-prevSunset)+"<br/>"); // E
            $('#times').append("The time difference between next sunset and now is "+toHHMMSS(nextSunset - now)+"<br/>"); // E

            $('#times').append("The time difference between yesterday sunrise and now is "+toHHMMSS(now - new Date(yesterdayData[0].results.sunrise))+"<br/>"); //E
            $('#times').append("The time difference between yesterday sunset and now is "+toHHMMSS(now - new Date(yesterdayData[0].results.sunset))+"<br/>"); //E
            $('#times').append("The time difference between tomorrow sunrise and now is "+toHHMMSS(new Date(tomorrowData[0].results.sunrise) - now)+"<br/>"); //E
            $('#times').append("The time difference between tomorrow sunset and now is "+toHHMMSS(new Date(tomorrowData[0].results.sunset) - now)+"<br/>"); //E


        })
    })



    function toHHMMSS(milliseconds){
        var seconds = milliseconds / 1000;
        var hourDisplayed = Math.floor(seconds / 3600) +"";
        var minuteDisplayed = Math.floor(seconds % 3600 / 60 ) + "";
        var secondDisplayed = (seconds % 60).toFixed(0) + "";
        return `${hourDisplayed.padStart(2,"0")}:${minuteDisplayed.padStart(2,"0")}:${secondDisplayed.padStart(2,"0")}`;
    }



})