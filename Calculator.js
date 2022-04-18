/**
 * 1. Start with the simplest test case of an empty string and move to one and two numbers
 * 2. Allow the Add method to handle an unknown amount of numbers
 * 3. Take up to two numbers, separated by commas, and will return their sum.
 * 4. Take up to two numbers, separated by new line, and will return their sum.
 * 5. Support different delimiters //;\n1;2
 * 6. Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.
 */
class Calculator {
  
  calculate(input) {
    if (this.isEmpty(input)) {
      return 0;
    } else if (input.length == 1) {
      return parseInt(input);
    }
    const splittedInput = this.splitStringByDelimiter(input)
    return parseInt(splittedInput[0]) + parseInt(splittedInput[1])
  }

  splitStringByDelimiter(input){
    return input.split(',')
  }

  isEmpty(input) {
    return input == '';
  }
}

module.exports = {Calculator};