const assert = require('assert')
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
    case: '2,',
    result: 2
  },
  {
    case: '\n',
    result: 0
  },
  {
    case: ',',
    result: 0
  },
  {
    case: '1\n',
    result: 1
  },
  {
    case: '1,\n',
    result: 1
  },
  {
    case: '1,\n2',
    result: 3
  },
  {
    case: ';1,\n2',
    result: 3
  },
  {
    case: `;1,\n2
    4`,
    result: 7
  },
];

for(const testCase of testCases) {
  console.log(testCase.case, (Add(testCase.case)))
  // const result = assert(Add(testCase.case) == testCase.result)
  // console.log(result);
}