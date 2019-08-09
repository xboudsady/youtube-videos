import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call calback from parent component
  };
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>  {/* add onSubmit prop, and callback function for form */}
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text"  
              value={ this.state.term }       // current state of our value
              onChange={ this.onInputChange } // Add callback function to accept change
              />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;