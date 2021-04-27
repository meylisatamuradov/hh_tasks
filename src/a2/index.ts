const isFibonacci = (n:number):boolean=> {

    let a = (5 * Math.pow(n, 2) + 4);
    let b = (5 * Math.pow(n, 2) - 4);
  
    let result = Math.sqrt(a) % 1 == 0,
      res = Math.sqrt(b) % 1 == 0;

    if (result || res == true) return true;
    else return false
}

export default (input:number):number[] => {
    let i = 0;
    let k=4;
    let result=[]
    while(i < input ){
      if( !isFibonacci(k) ){
          result.push(k)
          i++;
      }
      k++;
    }
    return result;
};

