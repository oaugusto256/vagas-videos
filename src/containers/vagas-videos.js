import React, { Component } from "react";
import { SyncLoader } from 'react-spinners';
import axios from "axios";
import {
  API_KEY,
  CHANNEL_NAME
} from "../config/const.js";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import VideoList from "../components/video-list";
import VideoDetail from "../components/video-detail";

class VagasVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      channel: {},
      loading: true,
      moreVideoLoading: false,
      selectedVideo: null,
      maxResults: 4,
    };
  }

  componentDidMount() {
    this.onChannelSearch();
  }

  onChannelSearch() {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&forUsername=${CHANNEL_NAME}&key=${API_KEY}`,
    })
      .then(({ data }) => {
        this.setState({ channel: data.items[0].snippet });
        const PLAYLIST_ID = data.items[0].contentDetails.relatedPlaylists.uploads;

        axios({
          method: 'get',
          url: `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=${this.state.maxResults}&part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&key=${API_KEY}`,
        })
          .then(({ data }) => {
            const VIDEO_LIST_ID = [];

            VIDEO_LIST_ID.push(data.items.map((video) => {
              return (video.snippet.resourceId.videoId);
            }));

            axios({
              method: 'get',
              url: `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_LIST_ID}&part=snippet,contentDetails,statistics&key=${API_KEY}`,
            })
              .then(({ data }) => {
                this.setState({
                  loading: false,
                  videos: data.items,
                  selectedVideo: data.items[0],
                  moreVideoLoading: false
                })
              });

          });
      });
  }

  onMoreVideos() {
    this.setState({
      maxResults: this.state.maxResults + 4,
      moreVideoLoading: true
    });

    this.onChannelSearch();
  }

  renderMoreVideosButton() {
    if (this.state.moreVideoLoading) {
      return (
        <div className="flex-center animated fadeIn margin-top-20 margin-bottom-80">
          <SyncLoader
            size={7.5}
            sizeUnit={"px"}
            color={'#494949'}
          />
        </div>
      )
    } else {
      return (
        <button
          onClick={() => { this.onMoreVideos() }}
          className="btn btn-default btn-block animated fadeIn margin-top-20 margin-bottom-80"
        >
          Carregar mais vídeos
        </button>
      )
    }
  }

  renderFeaturedVideos() {
    return (
      <div className="container padding-top-80 animated fadeIn">
        <div className="col-lg-8 col-md-8 col-xs-12">
          <p className="header-text">Vídeo em destaque</p>
          <hr />
          <VideoDetail
            video={this.state.selectedVideo}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12">
          <p className="header-text">+ Vídeos</p>
          <hr />
          <div>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
          {this.renderMoreVideosButton()}
        </div>
      </div>
    );
  }

  renderAllVideos() {

  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container vh-100">
          <div className="flex-center vh-100">
            <SyncLoader
              size={20}
              sizeUnit={"px"}
              color={'#494949'}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          {this.renderFeaturedVideos()}
          <Footer />
        </div>
      );
    }
  }
}

export default VagasVideos;
