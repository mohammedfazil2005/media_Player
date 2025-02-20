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


export const deleteHistory=async(id)=>{
    return await commonAPI("delete",`/history/${id}`,{})// {} for delete
}

export const deleteVideo=async(id)=>{
    return await commonAPI("delete",`/videos/${id}`,{})
}

export const addCategory=async(categoryDetails)=>{
    return await commonAPI("post","/categories",categoryDetails)
}

export const getCategory=async()=>{
    return await commonAPI("get","/categories","")
}

export const deleteCatgeory=async(id)=>{
    return await commonAPI("delete",`/categories/${id}`,{})
}


export const singleVideo=async(id)=>{
    return await commonAPI("get",`/videos/${id}`,"")
}

export const updateCategory=async(id,videoDeatails)=>{
    return await commonAPI('put',`/categories/${id}`,videoDeatails)
}