import React, { Component } from "react";
import axios from "axios";
import { 
  API_KEY, 
  CHANNEL_NAME 
} from "../config/const.js";
import SearchBar from "../components/search-bar";
import VideoList from "../components/video-list";
import VideoDetail from "../components/video-detail";

class VagasVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.channelSearch();
  }

  channelSearch() {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${CHANNEL_NAME}&key=${API_KEY}`,
    })
    .then(({ data }) => {
      const PLAYLIST_ID = data.items[0].contentDetails.relatedPlaylists.uploads;
      axios({
        method: 'get',
        url: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&key=${API_KEY}`,
      }).then(({ data }) => {
          this.setState({ 
            videos: data.items,
            selectedVideo: this.state.videos['0']
          })
      });    
    });
  }

  render() {
    return (
      <div className="container vh-100">
        <SearchBar />
        <div className="col-lg-8">
          <p className="text-header">Vídeo em destaque</p>
          <hr />
          <VideoDetail 
            video={this.state.selectedVideo}
          />
        </div>
        <div className="col-lg-4">
          <p className="text-header">+ Vídeos</p>
          <hr />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default VagasVideos;
