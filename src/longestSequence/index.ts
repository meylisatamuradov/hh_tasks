export type bit = '0' | '1';
type response= {
    startIndex:number,
    endIndex:number,
};

export default (n:bit[]):response=>{
    let max:number =0;
    let count:number=0;
    let endIndex:number =0;
    for( let i=0; i <n.length; ++i ){ 
        if(n[i] === '0') count++;
        if(n[i] !== '0' || i === n.length-1){
            if(count>max){
                max=count;
                endIndex = i;
            }
            count = 0;
        }
    }
    console.log(max)
    return {
        startIndex:endIndex-max,
        endIndex
    }
};
