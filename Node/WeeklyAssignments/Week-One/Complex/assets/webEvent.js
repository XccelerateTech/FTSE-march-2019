// handle the appearance and disappearance of the upload 
$('#uploadSec div').fadeToggle();

$('button#uploadButton').click(() => {
    $('section#uploadSec').css('display', 'flex');
    $('#uploadSec div').fadeToggle();
})

$('#uploadSec i.fa-times-circle').click(() => {
    $('section#uploadSec').css('display', 'none');
    $('#uploadSec div').fadeToggle();
})

let Cache;
// make a request - a get request down the route, filesdir, so we can get a list of all the cached objects
$.get('/filesdir')
    .done((data) => {
        Cache = data;

        // for loop is generated so we can assign the files we have got from our server to our html page. 
        for (let i = 0; i < Object.keys(Cache).length; i++) {
            $(`#body div:eq(${i})`).fadeToggle();

            // Here we are making our routes to handle the downloads. (we construct a url in an a tag so when it is pressed we can retrieve our file)
            $(`#body div:eq(${i})`).append(`<a href='http://localhost:8080/files/${Cache[i]}'>${Cache[i]}</a>`);
            $(`#body div:eq(${i})`).append('<i class="fas fa-times-circle" title="Delete file"></i>');

            //when the circle is clicked we fire off the request to filesdelete with the index of the item, when the function is finished then reload the page you're on 
            $(`#body div:eq(${i}) i.fas.fa-times-circle`).click(() => {
                $.get(`/filesdelete/${i}`)
                    .done(() => {
                        location.reload();
                    })
            })
        }
    })

$('#upload').change(() => {
    let path = document.getElementById('upload').value;
    let arr = path.split('\\');
    $('#uploadLabel').html(arr[arr.length - 1]);
})

