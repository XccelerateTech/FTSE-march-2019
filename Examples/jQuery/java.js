    var textArea;
    let i;

    for( i = 0; i< array.length; i ++){

    }

$(function (){

    var textArea = $('#demo')


            $('#form').submit(function(event){
                event.preventDefault();

                var name = event.target.name.value;
                var email = event.target.Email.value;

                console.log(name, email)

                alert(`Hello ${name}, this is your email: ${email}`)

                textArea.html(`Hello ${name}, this is your email: ${email}`)


                
            })

        textArea.append(' Holt shiz i have been added to the end!!!')

        $("<input type='text' name='fart' placeholder='how much do you fart?'>").appendTo('#form')

        $('<p>I am a new separate element</p>').appendTo(textArea)

})