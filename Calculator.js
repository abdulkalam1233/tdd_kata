class Calculator {
  
  calculate(input) {
    if (this.isEmpty(input)) {
      return 0;
    }
  }

  isEmpty(input) {
    return input == '';
  }
}

module.exports = {Calculator};