import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' }
  }

  render () {
    return (
      <div className="form-group">
        <input 
          className="form-control"
          placeholder="Pesquise um vídeo..."
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
      </div>    
    );
  }
};

export default SearchBar;