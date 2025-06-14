import React, { useEffect } from "react";
import "./Videopage.css";
import moment from "moment";
import Likewatchlatersavebtns from "./Likewatchlatersavebtns";
import { useParams, Link } from "react-router-dom";
import Comment from "../../Component/Comment/Comment";
import { useSelector, useDispatch } from "react-redux";
import { viewvideo } from "../../action/video";
import { addtohistory } from "../../action/history";
import { addPointsForVideoCompletion } from "../../action/auth"; // Import the new action

const Videopage = () => {
    const { vid } = useParams();
    const dispatch = useDispatch();
    const vids = useSelector((state) => state.videoreducer);
    const currentuser = useSelector((state) => state.currentuserreducer);

    // Safely get the video object, even if vids.data is null or undefined
    const vv = (vids?.data ?? []).filter((q) => q._id === vid)[0];

    const handleviews = () => {
        dispatch(viewvideo({id: vid}))
    };

    const handlehistory = () => {
        if (currentuser?.result?._id) {
            dispatch(
                addtohistory({
                    videoid: vid,
                    viewer: currentuser.result._id,
                })
            );
        }
    };

    useEffect(() => {
        handleviews();
        if (currentuser) {
            handlehistory();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentuser, handlehistory, handleviews]); // Added dependencies based on usage

    const handleVideoEnded = () => {
        if (currentuser?.result?._id && vv?._id) {
            console.log(`Video ended: ${vv._id}, User: ${currentuser.result._id}. Dispatching add points action.`);
            dispatch(addPointsForVideoCompletion(5)); // Dispatch the actual action with 5 points
        }
    };

    // Show loading screen while vv is undefined
    if (!vv) return <div className="loading">Loading video...</div>;

    return (
        <div className="container_videoPage">
            <div className="container2_videoPage">
                <div className="video_display_screen_videoPage">
                    <video
                        src={`https://movie-tube-clone.onrender.com/${vv?.filepath}`}
                        className="video_ShowVideo_videoPage"
                        controls
                        onEnded={handleVideoEnded} // Added onEnded event handler
                    ></video>
                    <div className="video_details_videoPage">
                        <div className="video_btns_title_VideoPage_cont">
                            <p className="video_title_VideoPage">{vv?.title}</p>
                            <div className="views_date_btns_VideoPage">
                                <div className="views_videoPage">
                                    {vv?.views} views <div className="dot"></div>{" "}
                                    {moment(vv?.createdat).fromNow()}
                                </div>
                                <Likewatchlatersavebtns vv={vv} vid={vid} />
                            </div>
                        </div>
                        <Link to={"/"} className="chanel_details_videoPage">
                            <b className="chanel_logo_videoPage">
                                <p>{vv?.uploader?.charAt(0).toUpperCase()}</p>
                            </b>
                            <p className="chanel_name_videoPage">{vv?.uploader}</p>
                        </Link>
                        <div className="comments_VideoPage">
                            <h2>
                                <u>Comments</u>
                            </h2>
                            <Comment videoid={vv._id} />
                        </div>
                    </div>
                </div>
                <div className="moreVideoBar">More videos</div>
            </div>
        </div>
    );
};

export default Videopage;
