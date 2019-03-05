var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
if (typeof who === 'undefined') {
  return 'One for you, one for me.';
} else { 
  return 'One for ' + who + ', one for me.';
}
};
module.exports = TwoFer;

// class TwoFer {
//   twoFer(name) {
//     if (name) {
//       return `One for ${name}, one for me.`
//     } else {
//       return 'One for you, one for me.'
//     }
//   }

// }

// module.exports = TwoFer;