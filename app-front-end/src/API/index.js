import axios from 'axios';

export const  combinePDFs =(data)=>{
     axios.post('/combinePDf',data,{
         headers:{
            'ContentType':'application/json'
         }
     }).then(res=>{
         console.log(res)
          return res  
        }).catch(err=>{
         console.log(err)
         return err
     })
}