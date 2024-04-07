import { useDispatch , useSelector } from 'react-redux';
import { useEffect , useRef } from "react";
import { Link } from 'react-router-dom'
import { Swiper , SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import PlayPause from './PlayPause';

import { playPause , setActiveSong } from '../redux/features/playerSlice';


import { SongCard } from '../components'


import { useGetTop2Query , useGetSongbyCategory2Query} from '../redux/services/shazamCore';
import Style from './SideBar.module.css'
import { Helmet } from 'react-helmet';




const Songs = () => {
  const { activeSong , isPlaying }  = useSelector((state) => state.player);
  const { data } = useGetTop2Query();

  
  const topPlays = data?.slice(0 , 5);
  return (
    <div   className='flex flex-col justify-center bg-background bg-center bg-repeat py-5 relative px-10 pt-10'>
          <div className='bg-green-400  h-12  py-2 my-2 rounded-md bg-gradient-to-r  from-green-900  to-purple-900'>
            <div className={Style.text}>
                  <p className='text-white text-right px-5 py-1 '>بیشترین ویو ها</p>
                 </div>
            </div>
                <div className='flex sm:justify-start mx-auto'>
        <div
         className='flex mx-auto h-auto w-full max-md:grid  gap-4   justify-center pt-5'>
        {topPlays?.map((song , i) => (
           
           <SongCard 
               totalview = {song.postview.totalview}
               key={song.key}
               song={song}
               isPlaying={isPlaying}
               activeSong={activeSong}
               data={data}
               i={i}
           />
         ))}
          </div>  

    </div>
</div>
);

  
}

export default Songs