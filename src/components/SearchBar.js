import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);     // Grabs the current value from our state for form submission
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