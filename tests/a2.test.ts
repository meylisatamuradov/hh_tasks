import notFibonacci from '../src/a2/index'

describe('notFibonacci', function() {
    it('check', function() {
      let result = notFibonacci(5);
      expect(result).toEqual([4,6,7,9,10]);   
    })
});