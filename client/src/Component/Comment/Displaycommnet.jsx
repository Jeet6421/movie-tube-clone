import React, { useState } from 'react'
import "./Comment.css"
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { editcomment, deletecomment } from '../../action/comment'
const Displaycommnet = ({cid,commentbody,userid, commenton, usercommented}) => {
    const dispatch = useDispatch();
    const [edit, setedit] = useState(false)
    const [cmtbody, setcommentbdy] = useState("")
    const [cmtid, setcmntid]= useState("")

    const currentUser = useSelector((state) => state.currentuserreducer);

    const handleedit = (ctid, ctbdy)=>{
        setedit(true)
        setcmntid(ctid)
        setcommentbdy(ctbdy)
    }

    const handleonsubmit=(e)=>{
        e.preventDefault();
        if(!cmtbody){
            alert("type your comment");
        }else{
            dispatch(editcomment({id:cmtid, commentbody:cmtbody}))
            setcommentbdy("")
        }
        setedit(false)
    }
    const handledel = (id)=>{
        dispatch(deletecomment(id))
    }


    return(
        <>
        {edit?(
            <>
            <form  className="comment_Sub_form_comments" onSubmit={handleonsubmit()}>
            <input type="text" onChange={(e)=>setcommentbdy(e.target.value)} placeholder='Edit comments..' value={cmtbody} className="comment_ibox" />
            <input type='submit' value="change" className='comment_add_btn_comments'/>
            </form>
        </>
        ):(
            <p className='comment_body'>{commentbody}</p>
        )}
        <p className="usercommented">{" "}- {usercommented} commented{moment(commenton).fromNow()}</p>
        {currentUser?.result?._id === userid && (
            <p className="EditDel_DisplayCommendt">
                <i onClick={()=>handleedit(cid, commentbody)}>Edit</i>
                <i onClick={()=>handledel(cid)}>Delete</i>
            </p>
        )}

        </>
        
    )
}

export default Displaycommnet