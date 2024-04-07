import { useDispatch , useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


import { SongCard } from '../components'


import { useGetTopChartsQuery , useGetSongbyCategory0Query } from '../redux/services/shazamCore';

import Style from './Hero.module.css'



const Hero = () => {
  const dispatch = useDispatch();
  const { activeSong , isPlaying , genreListId} = useSelector((state) => state.player);
  const { data } = useGetSongbyCategory0Query();
  
  const topPlays = data?.slice(0, 4);
  

 
    return (
        <div className='flex flex-col justify-center bg-hero-pattern bg-center bg-no-repeat bg-cover py-5 relative '>
          
            <div className='flex sm:justify-start  mx-auto'>
              <div className='flex gap-10 p-5 max-md:hidden'> 
             
              {topPlays?.map((song , i) => (
                <SongCard 
                   key={song.key}
                   song={song}
                   isPlaying={isPlaying}
                   activeSong={activeSong}
                   data={data}
                   i={i}
                   className='sm:grid'
                />
              ))}             
                 </div>
               </div>     
        </div>
    );
};

export default Hero;
