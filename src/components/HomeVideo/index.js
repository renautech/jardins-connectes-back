/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const HomeVideo = () => {
  return (
    <div className="homevideo">
      <iframe
        className="homevideo__video"
        title="video"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/watch?v=dJ26ChZXWUY?rel=0"
        frameBorder="0"
      >a
      </iframe>
    </div>
  );
};

export default HomeVideo;
