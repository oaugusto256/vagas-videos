import React from 'react';

const ChannelDetail = ( props ) => {
  const { title, description } = props.channel

  return (
    <div className="padding-15">
      <p className="channel-title">{`${title} Videos`}</p>
      <p className="channel-desc">{description}</p>
    </div>
  );
};

export default ChannelDetail;