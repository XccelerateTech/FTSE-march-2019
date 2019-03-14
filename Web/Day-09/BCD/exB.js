 // add Peter to the list
 $('tbody').append(`
        <tr class="row" id="row-3"> 
            <td>Peter</td> 
            <td>123456789</td> 
            <td>peter@gmail.com</td> 
        </tr>`);
 // Add button clear
 $('#row-submit').append('<input type="reset" value="clear" id="clear-input" class="clear"/>')
 // change the title
 $('#header').html('<h1>Sam\'s contact list application</h1>')
 // change text color
 $('#contact-list table').css('color','red')


