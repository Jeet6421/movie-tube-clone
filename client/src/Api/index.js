
import axios from 'axios';

const API = axios.create({ baseURL: 'https://movie-tube-clone.onrender.com' });
// const API = axios.create({ baseURL: 'http://localhost:5000/' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
})

export const login = (authdata) => API.post('/user/login', authdata);
export const updatechaneldata =(id, updatedata)=>API.patch(`/user/update/${id}`, updatedata)
export const fetchallchannel = ()=> API.get("/user/getallchannel");

export const uploadvideo = (filedata, fileoption)=>API.post("/video/uploadvideo", filedata, fileoption)
export const getvideos=()=>API.get("/video/getvideos");
export const likevideo=(id, Like) => API.patch( `/video/like/${id}`,{Like});
export const viewsvideo = (id)=> API.patch(`/video/view/${id}`);

export const postcomment =(comentdata)=> API.post('/comment/post',comentdata)
export const deletecomment =(id)=> API.delete(`/comment/delete/${id}`)
export const editcomment=(id,commentbody)=> API.patch(`/comment/edit/${id}`,{commentbody})
export const getallcomment = ()=> API.get('comment/get')

export const addtohistory=(historydata)=> API.post("/video/history", historydata)
export const getallhistory = ()=> API.get('/video/getallhistory')
export const deletehistory =(userid)=> API.delete(`/video/deletehistory/${userid}`)

export const addtolikedvideo=(likedvideodata) => API.post('/video/likevideo', likedvideodata)
export const getalllikedvideo = ()=> API.get('/video/getalllikevideo')
export const deletelikedvideo = (videoid, viewer) => API.delete(`/video/deletelikevideo/${videoid}/${viewer}`)

export const addtowatchlater = (watchlaterdata) =>API.post('/video/watchlater', watchlaterdata)
export const getallwatchlater = ()=> API.get('/video/getallwatchlater')
export const deletewatchlater = (videoid,viewer)=> API.delete(`/video/deletewatchlater/${videoid}/${viewer}`)

// Points
export const addPoints = (pointsData) => API.post('/user/add-points', pointsData);