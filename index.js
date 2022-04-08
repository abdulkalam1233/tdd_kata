function Add(numbers) {
  const parsedNumbers = numbers.toString().replace(/[^\d-]/g, 'd'); // d is our delimiter
  let sum = 0;
  let negativeNumbers = [];
  let nextNegativeNumber = false;
  let subStr = '';
  for (const char of parsedNumbers) {
    if (isNaN(char)) {
      if (char == '-') {
        nextNegativeNumber = true;
      } else if (char == 'd' && subStr.length) {
        if (!nextNegativeNumber) {
          if (Number(subStr) <= 1000) { // if the the number is bigger than 1000 then we have to ignore it
            sum += Number(subStr);
          }
        } else if (subStr) {
          negativeNumbers.push(Number(`-${Number(subStr)}`));
          nextNegativeNumber = false;
        }
        subStr = '';
      }
      continue;
    }
    subStr += char;
  }
  // Handling the negative and non negative condition and big number condition
  if (!nextNegativeNumber && Number(subStr) <= 1000) {
    sum += Number(subStr);
  } else if (nextNegativeNumber) {
    negativeNumbers.push(Number(`-${Number(subStr)}`));
  }

  // if there are any negative numbers then throwing error
  if (negativeNumbers.length) {
    throw new Error(`negatives not allowed ${negativeNumbers.join(',')}`);
  }
  return sum;
}

module.exports = {
  Add
}