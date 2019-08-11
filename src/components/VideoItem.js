import './VideoItem.css';
import React from 'react';

// props as an argument is passed from parent <VideoList /> component, from the fetch data API
const VideoItem = ({ video }) => {
  return (
    <div className=" video-item item">
      <img className="ui image" src={ video.snippet.thumbnails.medium.url } />
      <div className="content">
        <div className="header">
          { video.snippet.title }
        </div>
      </div>
      
    </div>
  )
};

export default VideoItem;