const expect = require('chai').expect;
const {Calculator} = require('../Calculator');

describe('TDD testing', function() {
  describe('#Multiplication', function() {
    let calculator;
    const operator = '*';
    beforeEach(() => {
      calculator = new Calculator;
    });

    it(`It Should give operator required exception`, function() {
      expect(function(){calculator.calculate('')}).to.throw('Operator is required')
    });

    it(`It Should return 0 for empty string`, function() {
      expect(calculator.calculate('', operator)).equal(0)
    });

    it(`It Should return single value for single number string`, function() {
      expect(calculator.calculate('1', operator)).equal(1)
    });

    it(`It Should return single value for big number string`, function() {
      expect(calculator.calculate('100', operator)).equal(100)
    });

    it(`Take up to two numbers, separated by commas, and will return their production.`, function() {
      expect(calculator.calculate('1,2', operator)).equal(2)
    });

    it(`Take up to two numbers, separated by new line, and will return their production.`, function() {
      expect(calculator.calculate('1,3', operator)).equal(3)
    });

    it(`Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.`, function() {
      expect(function(){calculator.calculate('-1', operator)}).to.throw('illegal character exception')
    });

    it(`Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.`, function() {
      expect(function(){calculator.calculate('//;1;-5', operator)}).to.throw('negatives not allowed -5')
    });

    it(`Ignore the number greater than the 1000.`, function() {
      expect(calculator.calculate('1001', operator)).equal(0)
    });

    it(`Ignore the number greater than the 1000.`, function() {
      expect(calculator.calculate('1001,2', operator)).equal(0)
    });

    it(`Ignore the number greater than the 1000.`, function() {
      expect(calculator.calculate('1001\n2', operator)).equal(0)
    });

    it(`string with 1000 and other number.`, function() {
      expect(calculator.calculate('1000\n1', operator)).equal(1000)
    });

    it(` Support different delimiters //;\n1;2 should return sum 3`, function() {
      expect(calculator.calculate('//;\n1;2', operator)).equal(2)
    });
  });
});
