import React, { Component } from "react";
import axios from "axios";
import {
  API_KEY,
  CHANNEL_NAME
} from "../config/const.js";
import { SyncLoader } from 'react-spinners';
import VideoList from "../components/video-list";
import VideoDetail from "../components/video-detail";
import ChannelDetail from "../components/channel-detail";

class VagasVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      channel: {},
      loading: true,
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.channelSearch();
  }

  channelSearch() {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&forUsername=${CHANNEL_NAME}&key=${API_KEY}`,
    })
      .then(({ data }) => {
        this.setState({ channel: data.items[0].snippet });
        const PLAYLIST_ID = data.items[0].contentDetails.relatedPlaylists.uploads;

        axios({
          method: 'get',
          url: `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=5&part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&key=${API_KEY}`,
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
              })
            });

          });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container vh-100">
          <div className="flex-center height-400">
            <SyncLoader
              size={15}
              sizeUnit={"px"}
              color={'#FFF'}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container vh-100">
          <ChannelDetail 
            channel={this.state.channel}
          />
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
}

export default VagasVideos;
