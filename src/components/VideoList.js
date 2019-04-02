import React from 'react';
import Videoitem from './VideoItem';

const Videolist = props => {
  const { videos, onVideoSelect } = props;
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => {
        return <Videoitem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
      })}
    </div>
  )
}

export default Videolist;