import React from 'react';
import VideoItemModal from './video-item-modal';

const VideoColumn = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <div className="col-lg-4" key={video.id}>
        <VideoItemModal
          video={video}
          onShowModal={props.onShowModal}
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