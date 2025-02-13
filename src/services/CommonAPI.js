import axios from "axios";
import baseURL from "./BaseURL";


const commonAPI=async(HTTPMethod,endPoint,requestBody)=>{

    const requestConfigration={
        method:HTTPMethod,
        url:baseURL+endPoint,
        data:requestBody
    }
   return await axios(requestConfigration).then((res)=>{
    return res;
   }).catch((error)=>{
    return error;
   })
}


export default commonAPI