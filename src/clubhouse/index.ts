import * as fs from 'fs';
import axios from 'axios';
import * as path from 'path'


export default (fileName:string='', ids:number[]=[]):Promise<Boolean>=>{
    return new Promise(async (resolve, reject)=>{
        let json =[];
        for(let id of ids){
            try{
                let response = await axios.get(`https://api.clubhouse.io/api/v3/projects/${id}`, {
                    headers:{
                        'Content-Type':'application/json',
                        'Clubhouse-Token':process.env.CLUBHOUSE_API_TOKEN
                    }
                  });
                  json.push({
                      id:response.data.id,
                      name:response.data.name,
                      description:response.data.description,
                  })
            }catch(err){
                console.log('error with priject id', id, err.message)
            }           
        }
        fs.writeFileSync(path.join(__dirname, '../../publics/',fileName), JSON.stringify(json, null, 2))
       resolve(true);
    })
};