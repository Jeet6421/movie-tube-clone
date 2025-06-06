import React from "react";
import Describechannel from "./Describechannel";
import Leftsidebar from "../../Component/Leftsidebar/Leftsidebar";
import Showvideogrid from "../../Component/Showvideogrid/Showvideogrid";
import { useParams } from "react-router-dom";
// import vid from '../../Component/Video/vid.mp4'
import { useSelector } from "react-redux";
const Channel = ({ setvideouploadpage, seteditcreatechanelbtn }) => {
  const { cid } = useParams();
  const vids = useSelector((state) => state.videoreducer)
    ?.data?.filter((q) => q?.videochanel === cid)
    .reverse();

  // const vids = [
  //     {
  //       _id:1,
  //       video_src:vid,
  //       chanel:"sadfasdfasdfert",
  //       title:"video 1",
  //       uploader:"abc",
  //       description:"description of video 1"

  //     },
  //     {
  //       _id:2,
  //       video_src:vid,
  //       chanel:"sadfasdfasdfert",
  //       title:"video 2",
  //       uploader:"abc",
  //       description:"description of video 2"

  //     },
  //     {
  //       _id:3,
  //       video_src:vid,
  //       chanel:"sadfasdfasdfert",
  //       title:"video 3",
  //       uploader:"abc",
  //       description:"description of video 3"

  //     },
  //     {
  //       _id:4,
  //       video_src:vid,
  //       chanel:"sadfasdfasdfert",
  //       title:"video 4",
  //       uploader:"abc",
  //       description:"description of video 4"

  //     },
  // ];

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <Describechannel
          cid={cid}
          setvideouploadpage={setvideouploadpage}
          seteditcreatechanelbtn={seteditcreatechanelbtn}
        />
        <Showvideogrid vids={vids} />
      </div>
    </div>
  );
};

export default Channel;
