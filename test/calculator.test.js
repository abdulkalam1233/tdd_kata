const expect = require('chai').expect;
const {Calculator} = require('../Calculator');

describe('TDD testing', function() {
  describe('#Add', function() {
    it(`It Should return 0 for empty string`, function() {
      const calculator = new Calculator();
      expect(calculator.calculate('')).equal(0)
    })
  });
});
