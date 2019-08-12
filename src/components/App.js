import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {                 // create a state with empty array to hold our list of data when fetch is called
    videos: [],             // Props to hold our array of day from onTermSubmit() on API fetch
    selectedVideo: null     // 2nd state to hold our selected video value via the on onVideoSelect()
  }

  componentDidMount() {                                 // Add default video list, when app load
    this.onTermSubmit('amazing travel')
  }
  
  onTermSubmit = async term => {                        // Submit input field, trigger YouTube API data fetch
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    
    this.setState({                           // Update our props to pass in the data being fetched
      videos: response.data.items,
      selectedVideo: response.data.items[0]   // When we do a new search, take the first video in result set, and use as default video
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })   // Update the prop of selected video, when <VideoItem /> comonent is clicked
  };
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={ this.onTermSubmit } />    {/* Calls the method to fetch API data */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo } />
            </div>
            <div className="five wide column">
            <VideoList 
                onVideoSelect={ this.onVideoSelect }  // Pass as prop to update state to our selected video
                videos={ this.state.videos }          // Pass in a prop for our video data that was fetched
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;