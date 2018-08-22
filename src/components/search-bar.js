import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" }
  }

  onInputChange(value) {
    this.setState({ value });
    this.props.onSearchTermChange(value);
  }

  render () {
    return (
      <div className="form-group">
        <input 
          className="form-control"
          placeholder="Pesquise um vídeo..."
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>    
    );
  }
};

export default SearchBar;