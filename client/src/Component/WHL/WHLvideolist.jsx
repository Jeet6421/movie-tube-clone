import React from 'react';
import Showvideolist from '../Showvideolist/Showvideolist';

const WHLvideolist = ({ page, currentUser, videolist }) => {
  const filteredVideos = Array.isArray(videolist?.data)
    ? videolist.data.filter(q => q?.viewer === currentUser).reverse()
    : [];

  return (
    <>
      {currentUser ? (
        <>
          {filteredVideos.map((m) => {
            console.log(m);
            return (
              <Showvideolist videoid={m?.videoid} key={m?._id} />
            );
          })}
        </>
      ) : (
        <h2 style={{ color: "white" }}>Plz login to Watch your {page}</h2>
      )}
    </>
  );
};

export default WHLvideolist;
