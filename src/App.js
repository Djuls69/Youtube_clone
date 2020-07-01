import React, { Component } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

const KEY = 'AIzaSyBbyzS9ULKAWESw09GH3H7Y-zmD3Gns97g';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount = () => {
    this.onSearchSubmit('Youtube Clone');
  };

  onSearchSubmit = async search => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: search,
        key: KEY,
        type: 'video'
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar searchValue={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails video={selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
