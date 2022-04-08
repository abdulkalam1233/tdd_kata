const {Add} = require('./index');

const testCases = [
  {
    case: '',
    result: 0
  },
  {
    case: '1',
    result: 1
  },
  {
    case: '1\n2',
    result: 3
  },
  {
    case: ';1\n2',
    result: 3
  },
  {
    case: `;1\n2
    4`,
    result: 7
  },
  {
    case: '-1\n-2,3,-5',
    is_negative: true
  },
  {
    case: ';1000\n2',
    result: 1002
  },
  {
    case: ';1001\n2',
    result: 2
  },
  {
    case: '-;1001\n2',
    is_negative: true
  },
  {
    case: `[%%]1[\n]24`,
    result: 25
  },
];

console.log('***************Testing Started*******************')
let totalPass = 0;
testCases.map((testCase, index) => {
  try {
    const result = Add(testCase.case);
    if (result == testCase.result) {
      totalPass += 1;
      console.log(`CASE: ${index + 1} Passed`)
    } else {
      console.error(`CASE: ${index + 1} Failed Expected: ${testCase.result} Actual: ${result}`)
    }
  } catch (e) {
    if (e.message && testCase.is_negative &&  e.message.startsWith('negatives not allowed')) {
      totalPass += 1;
      console.log(`CASE: ${index + 1} Passed `, e.message)
    } else {
      console.error(`CASE: ${index + 1} Error`, testCase.case, e)
    }
  }
});
console.log('***************Testing COMPLETED*******************')
console.log(`Passed: ${totalPass} \nFailed: ${testCases.length - totalPass}`);
