type bit = '0' | '1';
type zero= '0';
export default (n:bit[]):zero[]=>{
    var temp:number[] =[];
    let count:number=1;
    for( let i=0; i<n.length-1; ++i ){
        if(n[i] === '0'){
            for(let j=i+1; j < n.length; ++j ){
                
                if(n[j] !== '0') {
                    if(count !== 1){
                        temp.push(count)
                        count=1;
                    }
                    
                    i=j;
                    break;
                }
                count++
            }
        }
    }
    let result:zero[]=[];
    for(let i=0; i< Math.max.apply(null, temp); ++i){
        result.push('0')
    }
    return result
};
