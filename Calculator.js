/**
 * 1. Start with the simplest test case of an empty string and move to one and two numbers
 * 2. Allow the Add method to handle an unknown amount of numbers
 * 3. Take up to two numbers, separated by commas, and will return their sum.
 * 4. Take up to two numbers, separated by new line, and will return their sum.
 * 5. Support different delimiters //;\n1;2 should return sum 3
 * 6. Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.
 */
class Calculator {

  constructor() {
    // this.delimiter = new RegExp(',|\n');
    this.custom_delimiter = 'd';
    this.replace_delimiter_regex = /[^\d]/g;
    this.repeat_delimiter_regex = new RegExp(`${this.custom_delimiter}+`)
  }
  
  calculate(input) {
    if (this.isEmpty(input)) {
      return 0;
    }
    const splittedInput = this.splitStringByDelimiter(input)
    return this.getSum(splittedInput)
  }

  getSum(numbers) {
    let sum = 0;
    for(const num of numbers) {
      sum += parseInt(num || 0);
    }
    return sum;
  }

  splitStringByDelimiter(input){
    const inputWithCustomDelimiter = this.replaceTheSpecialCharactersWithTheCustomisedDelimeter(input);
    return inputWithCustomDelimiter.split(this.custom_delimiter);
  }

  replaceTheSpecialCharactersWithTheCustomisedDelimeter(input){
    const inputWithCustomDelimiter = input.replace(this.replace_delimiter_regex, this.custom_delimiter);
    return this.replaceRepeatingDelimiterWithSingleDelimiter(inputWithCustomDelimiter);
  }

  replaceRepeatingDelimiterWithSingleDelimiter(input) {
    return input.replace(this.repeat_delimiter_regex, this.custom_delimiter);
  }

  isEmpty(input) {
    return input == '';
  }
}

module.exports = {Calculator};