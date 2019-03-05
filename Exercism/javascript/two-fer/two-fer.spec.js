
var TwoFer = require('./two-fer');

describe('Two Fer', function () {
  var twoFerInstance = new TwoFer();

  it('gives one to you if no parameter given', function () {
    expect(twoFerInstance.twoFer()).toEqual('One for you, one for me.');
  });

 it('gives one to Alice if \'Alice\' is given', function () {
    expect(twoFerInstance.twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  it('gives one to Bob if \'Bob\' is given', function () {
    expect(twoFerInstance.twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});
