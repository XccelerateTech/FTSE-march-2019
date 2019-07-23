const fetch = require('node-fetch')
 
const axios = require('axios')


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



// async function callAPIs(){
//   try{
//       let res1 = await axios.get('https://restcountries.eu/rest/v2/capital/london')
//       let res2 = await axios.get(`https://restcountries.eu/rest/v2/capital/paris`)
//       return console.log({res1, res2});
//   }catch(err){
//       console.log(err);
//       throw err;
//   }
// }


// function callAPI (){
//   return new Promise ((resolve, reject)=>{
//     axios.get('https://restcountries.eu/rest/v2/capital/london').then(function (response) {
//       console.log(`This is the axios one `, response );
//     resolve(response)
//     })
//   })
// }


// callAPI().then((data)=>{
//   console.log(`This is my promised work `, data)
// }).catch((err)=>{
//   console.log(err)
// })

function hello (a , b){
  return new Promise ((resolve, reject)=>{
    setTimeout(function(err){
      if(err){
        reject(err)
      } else {
        resolve(a+b)
    }}, 2000)
  })
}

hello(3,4).then((data)=>{
 // logic to write answer to database
 console.log('hello eric')
 return data
}).then((sameData)=>{
  console.log(sameData)
  return 9000000
}).then((differentData)=>{
  console.log(`I now have new data, not the original`, differentData)
})
.catch((err)=>{
  console.log(err)
})

console.log('Hi Seb');
console.log('Hi Elvis');
console.log('Hi Sam');
console.log('Hi Jihyup')