import React from 'react';

// props as an argument is passed from parent <VideoList /> component, from the fetch data API
const VideoItem = ({ video }) => {
  return <div>
      <img src={ video.snippet.thumbnails.medium.url } />
      { video.snippet.title }
    </div>
};

export default VideoItem;