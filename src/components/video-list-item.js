import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item video-list-item">
      <div className="">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          <div className="video-details-publishedTime">{video.snippet.publishedAt}</div>
          <div className="video-details-viewCount">{video.statistics.viewCount}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;