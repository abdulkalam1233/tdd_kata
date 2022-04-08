const DELIMITER = 'd';
const NEGATIVE_SIGN = '-';

function Add(numbers) {
  const parsedNumbers = numbers.toString().replace(/[^\d-]/g, DELIMITER); // d is our delimiter
  let sum = 0;
  let negativeNumbers = [];
  let nextNegativeNumber = false;
  let subStr = '';
  for (const char of parsedNumbers) {
    if (isNaN(char)) {
      if (char == NEGATIVE_SIGN) {
        nextNegativeNumber = true;
      } else if (char == DELIMITER && subStr.length) {
        const numberVal = Number(subStr);
        if (!nextNegativeNumber) {
          // if the the number is bigger than 1000 then we have to ignore it
          sum += numberVal <= 1000 ? numberVal : 0;
        } else {
          negativeNumbers.push(Number(`${NEGATIVE_SIGN}${numberVal}`));
          nextNegativeNumber = false;
        }
        subStr = '';
      }
      continue;
    }
    subStr += char;
  }
  // if there is still numbers added to substr but not added to sum or negative numbers
  if (subStr) {
    const numberVal = Number(subStr);
    if (!nextNegativeNumber) {
      sum += numberVal <= 1000 ? numberVal : 0;
    } else {
      negativeNumbers.push(Number(`${NEGATIVE_SIGN}${numberVal}`));
    }
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