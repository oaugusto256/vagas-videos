import React, { Component } from "react";
import { API_KEY } from "../config/const.js";
import _ from 'lodash';
import YTSearch from "youtube-api-search";
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

    this.videoSearch('overwatch');
  }

  videoSearch(term) {
    setTimeout(() => {
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({
          videos: videos, 
          selectedVideo: videos[0]
        });
      });      
    }, 500);
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    console.log(this.state.videos);

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
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default VagasVideos;
