import React from 'react';
import Truncate from 'react-truncate';
import { FaEye } from 'react-icons/fa';

const VideoItemModal = ({ video, onShowModal }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li onClick={() => onShowModal(video)} className="video-item">
      <div className="flex">
        <div className="item-img">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
        <div className="item-info">
          <div className="item-title">
            <Truncate lines={2} ellipsis={<span>...</span>}>                
              {video.snippet.title}
            </Truncate>
          </div>
          <div className="item-viewCount">
            <div className="item-icon">
              <FaEye />
            </div>
            {`${video.statistics.viewCount} views`}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoItemModal;