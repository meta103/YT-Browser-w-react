import React from 'react';
import Videoitem from './VideoItem';

const Videolist = props => {
  const { videos } = props;
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => {
        return <Videoitem video={video} />
      })}
    </div>
  )
}

export default Videolist;