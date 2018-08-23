import React from 'react';
import { FaEye, FaClock } from 'react-icons/fa';

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  const day = video.snippet.publishedAt.substring(8,10);
  const monthNumber = Number(video.snippet.publishedAt.substring(5,7));
  const year = video.snippet.publishedAt.substring(0,4);

  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const url = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="video-details-box">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="margin-top-20">
        <div className="flex">
          <div className="video-details-title flex-70">{video.snippet.title}</div>
          <div className="video-details-publishedTime flex-20">   
            <div className="item-icon">
              <FaClock />
            </div>          
            {`${day} de ${month[monthNumber - 1]} de ${year}`}
          </div>
          <div className="video-details-viewCount flex-10">
              <div className="item-icon">
                <FaEye />
              </div>              
              {`${video.statistics.viewCount} views`}            
          </div>
        </div>        
        <hr />
        <div className="video-details-desc">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;