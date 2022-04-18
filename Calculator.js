class Calculator {
  
  calculate(input) {
    if (this.isEmpty(input)) {
      return 0;
    }
    return parseInt(input)
  }

  isEmpty(input) {
    return input == '';
  }
}

module.exports = {Calculator};