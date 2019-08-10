import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  // create a state with empty array to hold our list of data when fetch is called
  state = { 
    videos: []
  }
  
  // Submit input field, trigger YouTube API data fetch
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }
  
  render() {
    return (
      <div className="ui container">
        {/* Calls the method to fetch API data */}
        <SearchBar onFormSubmit={ this.onTermSubmit } />
        I have { this.state.videos.length } videos.
      </div>
    )
  }
}

export default App;