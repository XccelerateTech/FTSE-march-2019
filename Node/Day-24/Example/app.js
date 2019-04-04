const fetch = require('node-fetch')
var $ = require("jquery");
const axios = require('axios')
;


// const promise = new Promise ((resolve, reject) => {
//     $.get('https://restcountries.eu/rest/v2/capital/london', (data)=>{
//       resolve(data);
//     })
// })

// promise.then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// });


const aRequest =  new Promise ((happy, sad) => {
let  url = 'https://restcountries.eu/rest/v2/capital/london';
        fetch(url)
        .then(response => response.json())
        .then(info => happy(info))
        .catch(err=> sad(err));

    
});


const bRequest = new Promise ((happy, sad) => {
let  url = 'https://restcountries.eu/rest/v2/capital/paris';
        fetch(url)
        .then(response => response.json())
        .then(info => happy(info))
        .catch(err=> sad(err));

    
});


// const aRequest = () => {
//   return new Promise ((happy, sad) => {
// let  url = 'https://restcountries.eu/rest/v2/capital/london';
//         fetch(url)
//         .then(response => response.json())
//         .then(info => happy(info))
//         .catch(err=> sad(err));

    
// });
// }

// const bRequest = () => {
//   return new Promise ((happy, sad) => {
// let  url = 'https://restcountries.eu/rest/v2/capital/paris';
//         fetch(url)
//         .then(response => response.json())
//         .then(info => happy(info))
//         .catch(err=> sad(err));

    
// });
// }

// Promise.all([aRequest, bRequest])
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch((err=>{
//     console.log
//   }))

// aRequest().then(function(info){
//   console.log(info)
// },
// function(error){
//   console.log(error)
// }
// );



async function callAPIs(){
  try{
      let res1 = await axios.get('https://restcountries.eu/rest/v2/capital/london')
      let res2 = await axios.get(`https://restcountries.eu/rest/v2/capital/paris`)
      return console.log({res1, res2});
  }catch(err){
      console.log(err);
      throw err;
  }
}

callAPIs()