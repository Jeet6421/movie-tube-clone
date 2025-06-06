import React from 'react';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar';
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = () => {
  const { searchquery } = useParams();

  const videos = useSelector((state) => state?.videoreducer?.data || []);

  const filteredVideos = Array.isArray(videos)
    ? videos.filter((q) =>
        q?.videotitle?.toLowerCase().includes(searchquery?.toLowerCase())
      )
    : [];

  return (
    <div className='container_Pages_App'>
      <Leftsidebar />
      <div className='container2_Pages_App'>
        {filteredVideos.length > 0 ? (
          <Showvideogrid vid={filteredVideos} />
        ) : (
          <p style={{ padding: '20px',  color: 'white' }}>
            No videos found matching: <strong>{searchquery}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
