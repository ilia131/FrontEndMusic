import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery , useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import { FcLike } from "react-icons/fc";

const SongCard = ({ song, isPlaying , activeSong , i , data  }) => {
  const  dispatch = useDispatch();
  const handlePauseClick = () =>{
       dispatch(playPause(false))
  };
  const handlePlayClick = () =>{
     dispatch(setActiveSong({song , data , i}))
     dispatch(playPause(true))
  };
   return (
  <div className='flex flex-col w-[250px] p-4
  bg-gradient-to-r  from-green-900  to-purple-900 rounded-lg cursor-pointer'>
    <div className='relative w-full h-56 group'>
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50  group-hover:flex 
      ${activeSong?.id == song.id ? 'flex bg-black bg-opacity-70' :  'hidden'}`}>
        <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
       
      <img alt="song_img" src={song.get_image} className='w-full h-full' />
       
    </div>
    
   <div className='flex '>
    <div className='mt-4 flex flex-col'>
      <p className='font-semibold text-lg text-white truncate'>
        <Link to={`/profileView/${song?.account}`} song={song} data={data}>
          {song.title}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
          {song.description}
      </p>
      </div>
         <div className='flex-1 justify-end text-right pt-4'>
      
           <div className='flex gap-2  text-right justify-end text-gray-500 items-center'>
                 <FaPlay className='h-[0.5rem] w-[0.5rem]'/>
             <div className='text-xs'>
                <p>{song?.total_views}</p>
             </div>
             </div>
         </div>
     </div>

  </div>
   ) ;
}

export default SongCard;
