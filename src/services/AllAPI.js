import commonAPI from "./CommonAPI";

export const uploadVideo=async(requestBody)=>{
   return await commonAPI("post","/videos",requestBody)
}


export const getAllVideo=async(requestBody)=>{
    return await commonAPI("get","/videos","")
}