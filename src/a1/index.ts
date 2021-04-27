type response = 'Incorrect' | 'Correct'

export default (input:string):response => {
  let brackets = "[]{}()"
  let stack = []

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket)

    if(bracketsIndex === -1) continue;
    else if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return 'Incorrect';
      }
    }
  }
  return stack.length === 0 ? 'Correct':'Incorrect'
};





