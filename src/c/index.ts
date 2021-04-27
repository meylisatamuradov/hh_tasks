export default (n:string[], k:string[]):void=>{
    for( let item of k){
        let count=0;
        let arr=[];
        for(let i=0; i<n.length; ++i ){
            for(let j=i+1; j<n.length-1; ++j){
                if( item === (n[i]+n[j]) ||  item === (n[j]+n[i])){
                    count++;
                    arr.push(n[i]+':'+n[j])
                }
            }
        }
        console.log(count, arr.join(' '))
    }
};
