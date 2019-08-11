import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  // Array passed rom the mapped component, passd down as an argument
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });
  
  return <div>{ renderedList }</div> 
};

export default VideoList;