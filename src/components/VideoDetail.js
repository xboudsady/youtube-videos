import React from 'react';

const VideoDetail = ({ video }) => {
  // Check if video state is null, which is true based on initial state from parent component <App />
  if (!video) {
    return <div>Loading...</div>
  }
  return <div>{ video.snippet.title }</div>
};

export default VideoDetail;