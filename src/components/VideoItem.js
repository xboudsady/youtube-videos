import './VideoItem.css';
import React from 'react';

// props as an argument is passed from parent <VideoList /> component, from the fetch data API
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // On the divv, we create an event handler, to listen for the onVideo() call, for the selected video
    <div onClick={ () => onVideoSelect(video) } className=" video-item item">
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