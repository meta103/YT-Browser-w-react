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

  componentDidMount() {
    this.onTermSubmit('ariana grande')
  }

  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(result => {
      this.setState({
        videos: result.data.items,
        selectedVideo: result.data.items[0]
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
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App