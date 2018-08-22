import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem key={video.etag} video={video}/>
    );
  });

  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;