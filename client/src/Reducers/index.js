import {combineReducers} from 'redux';
import authreducer from './auth';
import chanelreducer from "./chanel";
import currentuserreducer from './currentuser';
import videoreducer from './video';
import commentreducer from './comment';
import historyreducer from './history';
import likedvideoreducer from './likedvideo';
import watchlaterreducer from './watchlater';
export default combineReducers({
    authreducer,
    currentuserreducer,
    chanelreducer,
    videoreducer,
    commentreducer,
    historyreducer,
    likedvideoreducer,
    watchlaterreducer,
});