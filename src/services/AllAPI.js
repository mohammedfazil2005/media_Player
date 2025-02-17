import commonAPI from "./CommonAPI";

export const uploadVideo=async(requestBody)=>{
   return await commonAPI("post","/videos",requestBody)
}


export const getAllVideo=async()=>{
    return await commonAPI("get","/videos","")
}

export const addHistory=async(requestBody)=>{
    return await commonAPI("post",'/history',requestBody)
}

export const getAllHistory=async()=>{
    return await commonAPI("get",'/history','')
}
