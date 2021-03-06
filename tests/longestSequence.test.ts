import longestSequence from '../src/longestSequence';
import { bit } from '../src/longestSequence';

describe('longestSequence', function() {
    it('check', function() {
      let input:bit[] = ['0','1','0','1','0','1','1','1','0','1','1','0','0','1','0','1','0','1','1','0',
      '1','1','0','0','0','1','1','0','0','0','1','1','0','1','1','0','1','1','1','1',
      '0','1','1','0','1','1','0','1','0','1','1','0','0','1','0','1','0','0','1','0',
      '0','0','0','0','0','1','1','1','0','1','0','0','0','1','1','0','1','1','1','1',
      '0','0','1','0','0','0','0','0','0','1','1','1','0','1','0','0','0','1','1','0',
      '1','0','0','0','0','1','1','0','0','1','0','1','0','0','1','0','0','0','0','0',
      '0','1','0','0','1','1','1','1','0','1','1','1','0','0','0','0','0','1','1','1',
      '0','1','0','0','0','1','1','0','1','0','0','1','0','1','1','0','1','1','1','1',
      '0','0','1','0','0','0','0','1','0','0','0','0','0','0','0','0'];

      let result = longestSequence(input);
      console.log(result)
      console.log(input.length)
      expect(result).toEqual({
        startIndex:59,
        endIndex:65
      });   
    })
});