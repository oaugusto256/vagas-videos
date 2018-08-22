import React from 'react';
const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  console.log(video);

  const url = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="video-details-box">
        <div className="flex">
          <div className="video-details-title">{video.snippet.title}</div>
          <div className="video-details-publishedTime">{video.snippet.publishedAt}</div>
          <div className="video-details-publishedTime">{video.statistics.viewCount}</div>
        </div>        
        <hr />
        <div className="video-details-desc">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;