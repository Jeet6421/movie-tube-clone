import React from 'react'
// import vid  from "../../Component/Video/vid.mp4"
import { useSelector } from 'react-redux'
import WHL from '../../Component/WHL/WHL'
const Watchlater = () => {
      const watchlatervideolist= useSelector((state)=>state.watchlaterreducer)
    //  const watchlatervideolist = [
    //             {
    //               _id:1,
    //               video_src:vid,
    //               chanel:"sadfasdfasdfert",
    //               title:"video 1",
    //               uploader:"abc",
    //               description:"description of video 1"
            
    //             },
    //             {
    //               _id:2,
    //               video_src:vid,
    //               chanel:"sadfasdfasdfert",
    //               title:"video 2",
    //               uploader:"abc",
    //               description:"description of video 2"
            
    //             },
    //             {
    //               _id:3,
    //               video_src:vid,
    //               chanel:"sadfasdfasdfert",
    //               title:"video 3",
    //               uploader:"abc",
    //               description:"description of video 3"
            
    //             },
    //             {
    //               _id:4,
    //               video_src:vid,
    //               chanel:"sadfasdfasdfert",
    //               title:"video 4",
    //               uploader:"abc",
    //               description:"description of video 4"
            
    //             }
    //           ]
  return (
    <WHL page={"Watch Later"} videolist={watchlatervideolist}/>
  )
}

export default Watchlater