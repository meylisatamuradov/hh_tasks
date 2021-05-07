type bit = '0' | '1';
type zero= '0';
export default (n:bit[]):zero[]=>{
    var max:number =0;
    let count:number=1;
    for( let i=0; i<n.length-1; ++i ){
        if(n[i] === '0'){
            for(let j=i+1; j < n.length; ++j ){
                if(n[j] !== '0') {
                    if(count>max) max =count;
                    i=j;
                    count=1;
                    break;
                }
                count++
            }
        }
    }
    return Array.from( {length:max}, ()=>'0' )
};
