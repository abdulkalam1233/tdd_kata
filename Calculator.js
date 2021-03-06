/**
 * 1. Start with the simplest test case of an empty string and move to one and two numbers
 * 2. Allow the Add method to handle an unknown amount of numbers
 * 3. Take up to two numbers, separated by commas, and will return their sum.
 * 4. Take up to two numbers, separated by new line, and will return their sum.
 * 5. Support different delimiters //;\n1;2 should return sum 3
 * 6. Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.
 * 7. Ignore the number greater than the 1000
 * 8. Numbers with underscore example: '1_00'
 * 9. Throw illegal character exception for null or undefined or startsWith the any char other than number and / input passed
 */
class Calculator {

  constructor() {
    this.custom_delimiter = '\n';
    this.replace_underscore = '_';
    this.replace_delimiter_regex = /[^\d-]+/g;
    this.input_validation_regex = /^([0-9]|\/)/
  }
  
  calculate(input, operator) {
    this.validateOperator(operator);
    this.validateInputString(input);
    if (this.isEmpty(input)) {
      return 0;
    }
    const splittedInput = this.splitStringByDelimiter(input)
    return this.getResult(splittedInput, operator)
  }

  getResult(numbers, operator) {
    this.checkNegativeNumbers(numbers);
    switch(operator) {
      case '+': {
        return this.calculateSum(numbers);
      }
      case '*': {
        return this.calculateProduction(numbers);
      }
    }
  }
  
  calculateSum(numbers) {
    let sum = 0;
    for(const num of numbers) {
      sum += this.checkGreaterThanThousand(num);
    }
    return sum;
  }

  calculateProduction(numbers) {
    let sum = 1;
    for(const num of numbers) {
      sum *= this.checkGreaterThanThousand(num);
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
    return inputWithCustomDelimiter.trim().split(this.custom_delimiter);
  }

  replaceTheSpecialCharactersWithTheCustomisedDelimeter(input){
    const inputWithNoUnderScores = this.replaceTheUnderScoreWithTheEmptyString(input)
    return inputWithNoUnderScores.replace(this.replace_delimiter_regex, this.custom_delimiter);
  }

  replaceTheUnderScoreWithTheEmptyString(input) {
    return input.replace(this.replace_underscore, '');
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

  validateInputString(input) {
    if (input == undefined || input == null) {
      throw new Error('illegal character exception');
    }
    if (input.length) {
      if (input.match(/([0-9]|\/)/).index !== 0) {
        throw new Error('illegal character exception');
      }
    }
  }
}

module.exports = {Calculator};