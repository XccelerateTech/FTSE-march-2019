// var Gigasecond = function (startDate){
//     this.startDate = startDate;
// }

// Gigasecond.prototype.date = function (startDate){
//     return new Date(
//         this.startDate.getTime() + 1000000000000
//     )

// }

// module.exports = Gigasecond

// export const gigasecond = (start) => {
//     return new Date(
//         start.getTime() + 1000000000000
//     )
// }


export const gigasecond = (date) => {
   
   date =(date.getSeconds() + 1000000000);
    return date;
  };
   
  
  