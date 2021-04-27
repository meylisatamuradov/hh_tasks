interface IObject {
    [key: string]: any;
}

export default class LeastRecentUsed{
    max_size:number;
    cache:IObject;
    constructor(max_size:number){
        this.max_size = max_size;
        this.cache = {};
    }

    _increaseCounter(except:string){
        for( let key of Object.keys(this.cache) ){
            if(key !== except){
                this.cache[key].counter++;
                if(this.cache[key].counter > this.max_size){
                    delete this.cache[key];
                }
            } 
        }
    }

    set(key:string,value:any){
        this._increaseCounter(key)
        //Update the cache map
        if(this.cache[key] === undefined){
            this.cache[key] = {
                value:value,
                counter:0
            };
            return value;
        } else{
            this.cache[key].counter = 0;
            this.cache[key].value = value;
            return this.cache[key].value;
        }
      }

      get(key:string){
          console.log(this.cache)
        if(this.cache[key] !== undefined){
            this._increaseCounter(key)
            this.cache[key].counter = 0;
            return this.cache[key].value;
        }else{
            return 'Key does not exist'
        }
       
      }
}



