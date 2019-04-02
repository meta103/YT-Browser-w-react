import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import Videolist from './VideoList';

class App extends Component {
  state = {
    videos: []
  }

  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(result => {
      this.setState({
        videos: result.data.items
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <Videolist videos={this.state.videos} />
      </div>
    )
  }
}

export default App