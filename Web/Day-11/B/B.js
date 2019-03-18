function informMe (endpoint, value){
    $(function(){
     $.ajax({
     url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
     beforeSend:function(xhr){
         console.log('getting data')
     },
     type: 'GET',
 }).done(function(data){
     console.log('This function will run if the AJAX has worked')
     console.log(data)
     let stringifiedData = JSON.stringify(data)
     let infoPoint = document.getElementById("information")
     infoPoint.innerHTML = stringifiedData
 }).fail(function(data){
     console.log('This message will run if the AJAX has failed')
 }).always(function(data){
     console.log('This function should always be called, no matter about success or failure.')
 });
});  
 }

// console.log('Europe Info');
// informMe('region', 'europe')

console.log('French Info');
informMe('capital', 'Paris');

