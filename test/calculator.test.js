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

    it(`Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.`, function() {
      expect(function(){calculator.calculate('-1')}).to.throw('negatives not allowed -1')
    });

    it(`Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.`, function() {
      expect(function(){calculator.calculate('-1,-5')}).to.throw('negatives not allowed -1,-5')
    });

    it(`Ignore the number greater than the 1000.`, function() {
      expect(calculator.calculate('1001')).equal(0)
    });

    it(`Ignore the number greater than the 1000.`, function() {
      expect(calculator.calculate('1001,2')).equal(2)
    });

    it(`Ignore the number greater than the 1000.`, function() {
      expect(calculator.calculate('1001\n2')).equal(2)
    });

    it(`string with 1000 and other number.`, function() {
      expect(calculator.calculate('1000\n1')).equal(1001)
    });
  });
});
