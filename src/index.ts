import a1 from './a1'
import a2 from './a2'
import b1 from './b1'
import c from './c'

import longestSequence from './longestSequence'

( ()=>{
    let zeroSequence = longestSequence(['0','1','0','1','0','1','1','1','0','1','1','0','0','1','0','1','0','1','1','0',
    '1','1','0','0','0','1','1','0','0','0','1','1','0','1','1','0','1','1','1','1',
    '0','1','1','0','1','1','0','1','0','1','1','0','0','1','0','1','0','0','1','0',
    '0','0','0','0','0','1','1','1','0','1','0','0','0','1','1','0','1','1','1','1',
    '0','0','1','0','0','0','0','0','0','1','1','1','0','1','0','0','0','1','1','0',
    '1','0','0','0','0','1','1','0','0','1','0','1','0','0','1','0','0','0','0','0',
    '0','1','0','0','1','1','1','1','0','1','1','1','0','0','0','0','0','1','1','1',
    '0','1','0','0','0','1','1','0','1','0','0','1','0','1','1','0','1','1','1','1',
    '0','0','1','0','0','0','0','1']);
    console.log(zeroSequence)
})();


/////////////////////////////////////////////// HERE A1 task. To run it uncomment it 

// (()=>{
//     // you can try other input for testing function
//     let a1_input = '([abc])';
    
//     let res = a1(a1_input)
//     console.log(res)
// })();


/////////////////////////////////////////////// HERE A2 task. to Run it uncomment it

// (()=>{
//     // you can try other input for testing function
//     let a2_input = 4;

//     let res = a2(a2_input)
//     console.log(res)
// })();



/////////////////////////////////////////////// HERE B1 task. to Run it uncomment it

// (()=>{
//     // you can try other input for testing function
//     let b1_input = 5;

//     let lru = new b1(b1_input)
//     lru.set('a', 1)
//     lru.set('b', 2)
//     lru.set('c', 3)
//     lru.set('d', 4)
//     lru.set('e', 5)
//     lru.set('f', 6)
//     lru.set('g', 6)
//     console.log(lru.get('a'))
// })();



/////////////////////////////////////////////// HERE C task. to Run it uncomment it

// (()=>{
//     // you can try other input for testing function
//     let c_input_n = ['abcd', 'cdef', 'ab', 'ef', 'ffff'];
//     let c_input_k = ['abcdef', 'ffff'];

//     c(c_input_n, c_input_k)

// })();