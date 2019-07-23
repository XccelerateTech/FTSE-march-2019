/* global Handlebars, $, axios, alert */

// Here is the duplicated handlebar (client side) code here.
//
// Note:
//   The client side handlebar code is a bit different from
//   what you have learnt in our CMS. We taught server-side
//   handlebars which you render the template in node.js

//   This handlebar is loaded via CDN. We compile it into
//   `notesTemplate` and we can use this as a function to
//   render HTML. See function `reloadNotes()`.

//   For more information, please look at
//   http://handlebarsjs.com/
// 

var notesTemplate = Handlebars.compile(
    `
    {{#each notes}}
    <div class="note">
        <span class="input"><textarea data-id="{{ id }}">{{ content }}</textarea></span>

        <button class="remove btn btn-xs" data-id="{{ id }}"><i class = "fa fa-trash" aria-hidden="true"></i></button>
        </div>
        {{/each}}
    `
);

const reloadNotes = (data) => {
    console.log('trying')
    $('#notes').html(notesTemplate({notes:data}));
    console.log('No?')
}

const beginSaving = (target) => {
    $(target).prop('disabled', true);
    $('.saving').show();
}

const endSaving = (target) => {
    $(target).prop('disabled', true);
    $('.saving').hide();
}

$(()=>{

    axios.get('/api/notes/')
        .then((res)=>{
            console.log(res.data, 'X')
            reloadNotes(res.data)
        }).catch((err)=>{
            console.log(err)
        });

        // let http = new XMLHttpRequest(); //create the XMLHttpRequest
        // http.open('GET', `/api/notes`); //call the api link you want to access - with the 'endpoint' and 'value' inputs from your function - use backticks
        
        // http.onreadystatechange = function () { //handle success and errors
        //     if (http.readyState != XMLHttpRequest.DONE) {
        //         return;
        //     } else if (http.status == 200) {
        //         console.log(http.responseText) //get data to the DOM
        //         let div = document.getElementById('notes');
        //         div.append(http.responseText);

        //     } else {
        //         console.log('error occurred' + http.status);
        //     }
        // }
        // http.send();



    $('#add').submit((e)=>{
        e.preventDefault(); 
        console.log('add pressed')

        var val = $('textarea[name=note]').val();
        console.log(val)
        if (val===''){
            return;
        }
        $('textarea[name=note]').val('');
        axios.post('/api/notes/', {
            note: val
        }).then((res)=>{
            console.log(res.data)
            reloadNotes(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    });

    $('#notes').on('blur', 'textarea', (event)=>{
        console.log('I am editing')
        console.log($(event.currentTarget).data('id'))

        beginSaving(event.currentTarget);

        axios.put('/api/notes/' + $(event.currentTarget).data('id'), {
            note: $(event.currentTarget).val()
        }).then((res)=>{
            endSaving(event.currentTarget);
            reloadNotes(res.data);
        }).catch((e)=>{
            endSaving(event.currentTarget);
            alert(e);
        });
    });

    $('#notes').on('click', '.remove', (event)=>{
        beginSaving(event.currentTarget);

        axios.delete('/api/notes/' + $(event.currentTarget).data('id')).then((res)=>{
            endSaving(event.currentTarget);
            reloadNotes(res.data);
        }).catch((e)=>{
            endSaving(e.currentTarget);
            alert(e);
        });
    });
});

