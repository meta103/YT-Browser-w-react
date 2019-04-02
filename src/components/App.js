import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import Videolist from './VideoList';
import VideoDetails from './VideoDetails';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
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

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}

export default App