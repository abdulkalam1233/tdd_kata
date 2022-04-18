const expect = require('chai').expect;
const {Calculator} = require('../Calculator');

describe('TDD testing', function() {
  describe('#Add', function() {
    let calculator;
    beforeEach(() => {
      calculator = new Calculator;
    });

    it(`It Should return 0 for empty string`, function() {
      expect(calculator.calculate('')).equal(0)
    });

    it(`It Should return single value for single number string`, function() {
      expect(calculator.calculate('1')).equal(1)
    });
  });
});
