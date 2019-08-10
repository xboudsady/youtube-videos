import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  // Submit input field, trigger YouTube API data fetch
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  }
  
  render() {
    return (
      <div className="ui container">
        {/* Calls the method to fetch API data */}
        <SearchBar onFormSubmit={ this.onTermSubmit } />
      </div>
    )
  }
}

export default App;