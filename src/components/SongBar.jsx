import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-green-400 ${activeSong?.title === song?.title ? 'bg-header' : 'bg-black'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.get_image}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
         <div >
            <p className="text-xl font-bold text-white max-md:text-xs">
              {song?.title}
            </p>
         </div>
        <p className="text-base text-gray-300 mt-1">
        
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;