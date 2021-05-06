const balanced = (arr)=>{
   arr = arr.sort( (a,b) => a-b );
   let temp=[]
    for(let i=0; i< arr.length; ++i){
        if(!temp.includes(arr[i])) temp.push(arr[i])
    }

    let res = 0;
    for(let i=temp.length-1; i>=0 ; --i){
        let count=0;
        for(let j=arr.length-1; j>=0; --j){
            if(arr[j] == temp[i]) count++;
        }
        if(count ==temp[i]) {
            res = temp[i];
            break;
        }
    }
    return res ==0 ? -1:res;
}


let res = balanced( [3,2,2] )
console.log(res)

