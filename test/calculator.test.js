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

    it(`It Should return single value for big number string`, function() {
      expect(calculator.calculate('100')).equal(100)
    });

    it(`Take up to two numbers, separated by commas, and will return their sum.`, function() {
      expect(calculator.calculate('1,2')).equal(3)
    });

    it(`Take up to two numbers, separated by new line, and will return their sum.`, function() {
      expect(calculator.calculate('1,3')).equal(4)
    });

    it(`Support different delimiters //;\n1;2 should return sum 3.`, function() {
      expect(calculator.calculate('//;\n1;2')).equal(3)
    });
  });
});
