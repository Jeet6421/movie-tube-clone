import mongoos from 'mongoose';
const commentschema = new mongoos.Schema({
    videoid:String,
    userid:String,
    commentbody:String,
    usercommented:String,
    commentedon:{
        type:Date,
        default:Date.now
    }
})   

export default mongoos.model('comments',commentschema);