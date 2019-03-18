//accept the form submission so that we take the given long&lat then pass them into the sunrise/sunset API. when it is done console.log the sunrise and sunset of the data - this is GMT (may need to add time difference)

$(function() { 
    $('#form').submit(function(input){
        input.preventDefault();

        let long = $('input[name=lng]').val();;
        let lat = $('input[name=lat]').val();

        $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`).done(function(data){ //call the api, when done recieve the request and do this with data callback
            
        console.log(data)
        let sunrise = new Date (data.results.sunrise) //new date changes the format to local time standard - for us that is china standard time
        let sunset = new Date (data.results.sunset)

        let now = new Date() //sets a time right now
        console.log('I am a new date object ' + now)

            console.log('Sunrise is at : ' + sunrise)
            console.log('Sunset is at : ' + sunset)

            // $('#times').append(`<p>Sunrise is at: ${sunrise} </p><br/> <p>Sunset is at: ${sunset}</p>`)

            $('#times').appendTo(`<p>Sunrise is at: ${sunrise} </p><br/> <p>Sunset is at: ${sunset}</p>`)
        });
    });
});

