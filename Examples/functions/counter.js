// var count;
// console.log(count);

// function counter(){
//     let count = 0;

//   count = count + 1;  
//   console.log(count); 
// }

// console.log(count)


// counter();

var classCount;

function classCheck(classCount){
if(classCount < 12){
  let classCount =+ 1;
  console.log(classCount)
  classCheck();
} else {
  console.log("Let start")

}
}

classCheck();
