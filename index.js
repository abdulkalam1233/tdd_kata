function Add(numbers) {
  const parsedNumbers = numbers.replace(/[^\d-]/g, '')
  if (numbers === '') {
    return 0;
  }
  let sum = 0;
  let negativeNumbers = [];
  let nextNegativeNumber = false;
  for (const char in parsedNumbers) {
    if (isNaN(char)) {
      nextNegativeNumber = true;
      continue;
    }
    if (nextNegativeNumber) {
      negativeNumbers.push(Number(`-${char}`));
      nextNegativeNumber = false;
      continue;
    }
    sum += Number(char);
  }
  if (negativeNumbers.length) {
    throw new Error(`negatives not allowed ${negativeNumbers.join(',')}`);
  }
  return sum;
}

module.exports = {
  Add
}