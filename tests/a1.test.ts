import isBalanced from '../src/a1/index'

describe('bracets', function() {
    it('check', function() {
      let result = isBalanced('{dsa[]}');
      expect(result).toBe('Correct');   
    })
});