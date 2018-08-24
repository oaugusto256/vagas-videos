import React from 'react';
import VideoItem from './video-item';

const VideoColumn = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <div className="col-lg-4">
        <VideoItem
          video={video}
          key={video.etag}
          onVideoSelect={props.onVideoSelect}
        />
      </div>      
    );
  });

  return (
    <div className="row">
      {videoItems}
    </div>
  );
};

export default VideoColumn;