import React from 'react';
import './videoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const htmlTitle = video.snippet.title
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'");

  return (
    <div onClick={() => onVideoSelect(video)} className='item video-item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{htmlTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
