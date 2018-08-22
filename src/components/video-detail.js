import React from 'react';
import { SyncLoader } from 'react-spinners';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="flex-center margin-top-160">
        <SyncLoader
          size={20}
          sizeUnit={"px"}
          color={'#FFF'}
        />
      </div>
    );
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} src={url} frameborder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="video-details-box">
        <div className="video-details-title">{video.snippet.title}</div>
        <hr />
        <div className="video-details-desc">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;