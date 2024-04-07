import { useDispatch , useSelector } from 'react-redux';
import { useEffect , useRef } from "react";
import { Link } from 'react-router-dom'
import { Swiper , SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import PlayPause from './PlayPause';

import { playPause , setActiveSong } from '../redux/features/playerSlice';


import { SongCard, SongCard1} from '../components'


import { useGetAllLikeQuery } from '../redux/services/shazamCore';

import Style from './SideBar.module.css'



const Songs = () => {
  const { activeSong , isPlaying }  = useSelector((state) => state.player);
  const { data } = useGetAllLikeQuery();

  const topPlays = data?.slice(0, 5);

  return (
    <div   className='flex flex-col justify-center bg-background bg-center bg-repeat py-5 relative px-10'>
          <div className='bg-gradient-to-r  from-green-900  to-purple-900 h-12 py-2 my-2 rounded-md  '>
          <div className={Style.text}>
                 <p className='text-white text-right px-5 py-1'>بیشترین لایک ها</p>
                 </div>
            </div>
                <div className='flex sm:justify-start  mx-auto'>

        <div
         className='flex mx-auto h-auto w-full max-md:grid  gap-4 justify-center pt-5'>
        {topPlays?.map((song, i) => (      
          <div>
             <SongCard1
               totalview = {song.postlike.totallike}
               key={song.key}
               song={song}
               isPlaying={isPlaying}
               activeSong={activeSong}
               data={data}
               i={i}
           />
             </div>
          ))}
          </div> 
           
      
    </div>
</div>
);

  
}

export default Songs