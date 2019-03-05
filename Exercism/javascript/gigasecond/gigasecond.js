// var Gigasecond = function (startDate){
//     this.startDate = startDate;
// }

// Gigasecond.prototype.date = function (startDate){
//     return new Date(
//         this.startDate.getTime() + 1000000000000
//     )

// }

// module.exports = Gigasecond


export const gigaSecond = (startDate) => {
    return new Date(
        startDate.getTime() + 1000000000000
    )

}