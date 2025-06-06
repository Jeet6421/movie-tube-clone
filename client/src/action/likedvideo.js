import * as api from "../Api";

export const addtolikedvideo=(likevideodata)=>async(dispatch)=>{
    try {
        const {data} = await api.addtolikedvideo(likevideodata)
        dispatch({type:"POST_LIKEDVIDEO", data})
        dispatch(getalllikedvideo())

    } catch (error) {
        console.log(error);
        
    }
}

export const getalllikedvideo=()=>async(dispatch)=>{
    try {
        const {data} = await api.getalllikedvideo()
        dispatch({type:"FETCH_ALL_LIKED_VIDEOS", payload:data})
    } catch (error) {
        console.log(error);
        
    }
}

export const deletelikedvideo = (likevideodata)=>async(dispatch)=>{
    try {
        const {videoid, viewer}=likevideodata
        await api.deletelikedvideo(videoid, viewer)
        dispatch(getalllikedvideo())
    } catch (error) {
        console.log(error);
        
    }
}