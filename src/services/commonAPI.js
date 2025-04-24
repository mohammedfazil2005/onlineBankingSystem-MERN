    import axios from "axios"
    import baseURL from "./baseURL"

    const commonAPI=async(method,endpoint,reqbody,reqheaders)=>{
     
        let configration={
            method:method,
            url:baseURL+endpoint,
            data:reqbody,
            headers:reqheaders?reqheaders:{'Content-Type':'application/json'}
        }
        return await axios(configration).then((res)=>{
            return res
        }).catch((err)=>{
            return err
        })
    }

    export default commonAPI