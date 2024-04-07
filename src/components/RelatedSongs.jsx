import SongBar  from './SongBar';
import Style from './DetailsHeader.module.css'
import { SongBar1 } from '.';





const RelatedSongs = ({
  SongData, isPlaying , activeSong, handlePauseClick, handlePlayClick , artistId
}
  ) => (
  <div className='flex flex-col'>
    <h1 className={Style.related}>: موزیک های مربوط</h1>
     
    <div className='mt-6 w-full flex flex-col '> 
        {SongData?.map((song, i) => (
          <div>
            <div>{song?.title}</div>
          <SongBar1 
            key={song.key}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
          </div>
        ))}
    </div>
  </div>
);

export default RelatedSongs;
