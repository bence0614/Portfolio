import React from 'react';
import ReactPlayer from 'react-player';

import posterSrc from '../assets/img/limited2.jpg'
import video from '../assets/video/cardVideo.mp4'

export const VideoJSCard = () => {

  const videoSrc = video;
  const poster = posterSrc;

  return (
    <div className='player-wrapper'>
      <ReactPlayer className='react-player'
        url={videoSrc}
        poster={poster}
        controls
        volume={1}
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default VideoJSCard;