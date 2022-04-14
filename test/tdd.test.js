const expect = require('chai').expect;
const {Add} = require('../index');

describe('TDD testing', function() {
  describe('#Add', function() {
    it(`It Should return 0 for string ''`, function() {
      expect(Add('')).equal(0)
    })

    it(`It Should return 1 for string '1'`, function() {
      expect(Add('1')).equal(1)
    })

    it(`It Should return 3 for string '1\n2'`, function() {
      expect(Add('1\n2')).equal(3)
    })

    it(`It Should return 3 for string ';1\n2'`, function() {
      expect(Add(';1\n2')).equal(3)
    })

    it(`It Should throws 'negatives not allowed -1,-2,-5' for string '-1\n-2,3,-5'`, function() {
      expect(function(){Add('-1\n-2,3,-5')}).to.throw('negatives not allowed -1,-2,-5')
    })

    it(`It Should return 1002 for string ';1000\n2'`, function() {
      expect(Add(';1000\n2')).equal(1002)
    })

    it(`It Should return 2 for string ';1001\n2'`, function() {
      expect(Add(';1001\n2')).equal(2)
    })

    it(`It Should return 25 for string '[%%]1[\n]24'`, function() {
      expect(Add('[%%]1[\n]24')).equal(25)
    })
  });
});
