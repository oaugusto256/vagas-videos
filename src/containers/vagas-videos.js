import React, { Component } from "react";
import { SyncLoader } from 'react-spinners';
import { FaTimes } from 'react-icons/fa';
import ReactModal from 'react-modal';
import axios from "axios";
import {
  API_KEY,
  CHANNEL_NAME
} from "../config/const.js";
import NavBar from "../components/nav-bar";
import VideoList from "../components/video-list";
import VideoDetail from "../components/video-detail";
import VideoColumn from "../components/video-column";

class VagasVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      searchVideos: [],
      channel: {},
      maxResults: 6,
      channelId: '',
      searchedValue: '',
      searchBarValue: '',
      window: 'featuredVideos',
      loading: true,
      showModal: false,
      searchLoading: false,
      moreVideoLoading: false,
      selectedVideo: null,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.onSearchChannel();
  }

  onSearchChannel() {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&forUsername=${CHANNEL_NAME}&key=${API_KEY}`,
    })
      .then(({ data }) => {
        this.setState({
          channelId: data.items[0].id,
          channel: data.items[0].snippet
        });
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

  onSearchVideo() {
    this.setState({
      window: 'searchVideo',
      searchLoading: true,
      searchedValue: this.state.searchBarValue
    });

    axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&channelId=${this.state.channelId}&q=${this.state.searchBarValue}&key=${API_KEY}`,
    })
      .then(({ data }) => {
        const VIDEO_LIST_ID = [];

        VIDEO_LIST_ID.push(data.items.map((video) => {
          return (video.id.videoId);
        }));

        axios({
          method: 'get',
          url: `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_LIST_ID}&part=snippet,contentDetails,statistics&key=${API_KEY}`,
        })
          .then(({ data }) => {
            this.setState({
              searchLoading: false,
              searchVideos: data.items,
              searchBarValue: '',
            });
          });
      });
  }

  onMoreVideos() {
    this.setState({
      moreVideoLoading: true,
      maxResults: this.state.maxResults + 6
    });

    this.onSearchChannel();
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  renderVideoModal() {
    if (this.state.showModal) {
      return (
        <div>
          <ReactModal isOpen={this.state.showModal} className="video-modal">
            <div className="padding-15">
              <div className="flex">
                <button className="btn-modal-close" onClick={this.handleCloseModal}>
                  <div className="flex-center">
                    <FaTimes />
                  </div>
                </button>
              </div>
              <VideoDetail
                video={this.state.selectedVideo}
              />
            </div>
          </ReactModal>
        </div>
      );
    }
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
        <div className="flex margin-top-20 margin-bottom-80">
          <button
            onClick={() => { this.onMoreVideos() }}
            className="btn btn-block btn-moreVideos animated fadeIn"
          >
            Carregar mais vídeos
        </button>
        </div>

      )
    }
  }

  renderFeaturedVideos() {
    return (
      <div className="container padding-top-40 animated fadeIn margin-bottom-80">
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

  renderSearchVideo() {
    if (this.state.searchLoading) {
      return (
        <div className="flex-center vh-100 animated fadeIn margin-top-20 margin-bottom-80">
          <SyncLoader
            size={15}
            sizeUnit={"px"}
            color={'#494949'}
          />
        </div>
      )
    } else {
      return (
        <div className="container padding-top-40 animated fadeIn">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <p className="header-text">{`Resultados para: "${this.state.searchedValue}"`}</p>
            <hr />
            <VideoColumn
              videos={this.state.searchVideos}
              onShowModal={selectedVideo => { this.setState({ selectedVideo, showModal: 'true' }) }}
            />
          </div>
        </div>
      );
    }
  }

  renderAllVideos() {
    return (
      <div className="container padding-top-40 animated fadeIn">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <p className="header-text">Todos os vídeos do canal</p>
          <hr />
          <VideoColumn
            videos={this.state.videos}
            onShowModal={selectedVideo => { this.setState({ selectedVideo, showModal: 'true' }) }}
          />
          {this.renderMoreVideosButton()}
        </div>
      </div>
    );
  }

  renderWindow() {
    if (this.state.window === 'allVideos') return this.renderAllVideos();
    if (this.state.window === 'searchVideo') return this.renderSearchVideo();
    if (this.state.window === 'featuredVideos') return this.renderFeaturedVideos();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container vh-100">
          <div className="flex-center vh-100">
            <SyncLoader
              size={15}
              sizeUnit={"px"}
              color={'#494949'}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar
            callSearch={() => this.onSearchVideo()}
            searchBarValue={this.state.searchBarValue}
            onClickSearch={() => { this.onSearchVideo() }}
            onClickMenu={() => { this.setState({ window: 'allVideos' }) }}
            onClickBrand={() => { this.setState({ window: 'featuredVideos' }) }}
            onChangeSearchValue={(event) => { this.setState({ searchBarValue: event.target.value }) }}
          />
          {this.renderWindow()}
          {this.renderVideoModal()}
        </div>
      )
    }
  }
}

export default VagasVideos;
