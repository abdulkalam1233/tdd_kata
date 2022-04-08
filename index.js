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
        if (!nextNegativeNumber) {
          if (Number(subStr) <= 1000) { // if the the number is bigger than 1000 then we have to ignore it
            sum += Number(subStr);
          }
        } else {
          negativeNumbers.push(Number(`${NEGATIVE_SIGN}${Number(subStr)}`));
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
    if (!nextNegativeNumber && Number(subStr) <= 1000) {
      sum += Number(subStr);
    } else if (nextNegativeNumber) {
      negativeNumbers.push(Number(`${NEGATIVE_SIGN}${Number(subStr)}`));
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