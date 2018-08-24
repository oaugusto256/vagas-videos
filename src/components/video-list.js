import React from 'react';
import VideoItem from './video-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return (
    <div className="video-list">
      <ul className="">
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;