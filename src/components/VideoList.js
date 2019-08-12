import React from 'react';
import VideoItem from './VideoItem';

// Will reference the props object, being passed down from the parent <App /> component 
const VideoList = ({ videos, onVideoSelect }) => {
  // Array passed rom the mapped component, passd down as an argument
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={ onVideoSelect } video={ video } />;
  });
  
  return <div className="ui relaxed divided list">{ renderedList }</div> 
};

export default VideoList;