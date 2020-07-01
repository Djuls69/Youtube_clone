import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchValue(this.state.input);
  };

  render() {
    return (
      <div className='ui segment search-bar'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              onChange={this.onInputChange}
              value={this.state.input}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
