import React from 'react';

// The video 'object' passed as argumen here is the data from the API request
// Use use deconstructure, to avoid having to stype prop.video
const VideoDetail = ({ video }) => {
  // Check if video state is null, which is true based on initial state from parent component <App />
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${ video.id.videoId }`

  return (
    <div>
      {/* Add an iFrame to render our video to be played */}
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      {/* Selected video description */}
      <div className="ui segment">
        <h4 className="ui header">{ video.snippet.title }</h4>
      </div>
      <p>{ video.snippet.description }</p>
    </div>
  );
};

export default VideoDetail;