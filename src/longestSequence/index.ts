type bit = '0' | '1';
type zero= '0';
export default (n:bit[]):zero[]=>{
    let max:number =0;
    let count:number=0;

    for( let i=0; i<n.length; ++i ){ 
        if(n[i] !== '0'){
            if(count>max){
                max=count;
            }
            count = 0;
        }
        if(n[i] === '0') count++;
    }
    console.log(max)
    return Array.from( {length:max}, ()=>'0' )
};
