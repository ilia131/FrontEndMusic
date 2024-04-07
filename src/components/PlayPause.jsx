import { FaPauseCircle , FaPlayCircle } from 'react-icons/fa';



const PlayPause = ({ isPlaying , activeSong , song, handlePause, handlePlay, handleView}) => (
 (isPlaying && activeSong?.id == song.id ? (
  <FaPauseCircle 
    size={35}
    className='text-gray-300'
    onClick={handlePause }
  />
 ) : (
  <FaPlayCircle 
  size={35}
  className='text-gray-300'
  onClick={() => {
    handlePlay();
    handleView();
  }}/>
 ))
);

export default PlayPause;
