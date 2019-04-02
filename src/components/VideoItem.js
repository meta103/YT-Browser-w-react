import React from 'react';
import './videoitem.css';

const Videoitem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default Videoitem;