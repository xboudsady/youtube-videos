import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  // create a state with empty array to hold our list of data when fetch is called
  state = { 
    // Props to hold our array of day from onTermSubmit() on API fetch
    videos: [],
    // 2nd state to hold our selected video value via the on onVideoSelect()
    selectedVideo: null
  }
  
  // Submit input field, trigger YouTube API data fetch
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // Update our props to pass in the data being fetched
    this.setState({ videos: response.data.items });
  }

  onVideoSelect = (video) => {
    console.log('From the App', video);
  };
  
  render() {
    return (
      <div className="ui container">
        {/* Calls the method to fetch API data */}
        <SearchBar onFormSubmit={ this.onTermSubmit } />
        <VideoList 
            onVideoSelect={ this.onVideoSelect }  // Pass as prop to update state to our selected video
            videos={ this.state.videos }          // Pass in a prop for our video data that was fetched
          />
      </div>
    )
  }
}

export default App;