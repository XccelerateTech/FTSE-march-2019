const reverseLogger = (input) => {

    for(i = 3; i >=0 ; i --) {
          console.log(input[i])
    }
  }
  
  const array = ['Dog', 'Cat', 'Shark', 'Rabbit'];
  
  
  // logger(array);
  
  // console.log(array[0]); // the elements index inside the array
  
//   reverseLogger(array);
  
// const drippingTap=()=>{
//     setInterval(()=>{
//         console.log('drip')
//     }, 1000)
// }

// console.log(drippingTap)

// drippingTap();

// function turnOffDrippingTap(thing){
//     setTimeout(function (){
//             clearInterval(thing)
//         }, 2000)
// }

// turnOffDrippingTap(drippingTap)

// var helllo = setInterval(()=>{
//     console.log('drip')
// }, 1000)

// helllo;


// setTimeout(()=>{
//     clearInterval(helllo)
// }, 3000)

var a;

    const drippingTap = setInterval(()=>{
        console.log('drip')
    }, 1000)


drippingTap;

    setTimeout(function (){
            clearInterval(drippingTap)
        }, 2000)



setInterval(drippingTap=()=>{
    console.log(drip)
}, 1000)

setTimeout(turnOffTap=()=>{
    clearInterval()
}, )



