/**
 * 1. Start with the simplest test case of an empty string and move to one and two numbers
 * 2. Allow the Add method to handle an unknown amount of numbers
 * 3. Take up to two numbers, separated by commas, and will return their sum.
 * 4. Take up to two numbers, separated by new line, and will return their sum.
 * 5. Support different delimiters //;\n1;2 should return sum 3
 * 6. Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.
 * 7. Ignore the number greater than the 1000
 */
class Calculator {

  constructor() {
    this.custom_delimiter = 'd';
    this.replace_delimiter_regex = /[^\d-]+/g;
  }
  
  calculate(input, operator) {
    this.validateOperator(operator);
    if (this.isEmpty(input)) {
      return 0;
    }
    const splittedInput = this.splitStringByDelimiter(input)
    return this.getResult(splittedInput, operator)
  }

  getResult(numbers, operation) {
    this.checkNegativeNumbers(numbers);
    return this.calculateSum(numbers);
  }
  
  calculateSum(numbers) {
    let sum = 0;
    for(const num of numbers) {
      sum += this.checkGreaterThanThousand(num);
    }
    return sum;
  }

  checkNegativeNumbers(numbers) {
    const negativeNumbers = numbers.filter((num) => parseInt(num) < 0);
    if (negativeNumbers.length) {
      throw new Error(`negatives not allowed ${negativeNumbers.toString()}`)
    }
    return;
  }

  splitStringByDelimiter(input){
    const inputWithCustomDelimiter = this.replaceTheSpecialCharactersWithTheCustomisedDelimeter(input);
    return inputWithCustomDelimiter.split(this.custom_delimiter);
  }

  replaceTheSpecialCharactersWithTheCustomisedDelimeter(input){
    return input.replace(this.replace_delimiter_regex, this.custom_delimiter);
  }

  isEmpty(input) {
    return input == '';
  }

  checkGreaterThanThousand(num) {
    const intVal = parseInt(num);
    return intVal > 1000 ? 0 : intVal;
  }

  validateOperator(operator) {
    if (!operator) {
      throw new Error('Operator is required');
    }
    if (!['+', '*'].includes(operator)) {
      throw new Error('invalid operator');
    }
  }
}

module.exports = {Calculator};