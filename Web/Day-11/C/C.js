function informMe (endpoint, value){
    $(function(){
     $.get({
     url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
   
 }).done(function(data){
     console.log('This function will run if the AJAX has worked')
     console.log(data)
 }).fail(function(data){
     console.log('This message will run if the AJAX has failed')
 }).always(function(data){
     console.log('This function should always be called, no matter about success or failure.')
 });
});  
 }

 informMe('currency', 'GBP');

//  const informSeb = (a,b) => {
//     $.get({
//         url:`https://restcountries.eu/rest/v2/${a}/${b}`,
      
//     }).done(function(data){
//         console.log('This function will run if the AJAX has worked')
//         console.log(data)
//     }).fail(function(data){
//         console.log('This message will run if the AJAX has failed')
//     }).always(function(data){
//         console.log('This function should always be called, no matter about success or failure.')

//    });  
//  }

//  informSeb('name', 'Germany')