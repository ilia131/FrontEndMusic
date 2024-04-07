import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader , Footer, Navbar, RelatedSongs } from '../components';


import { setActiveSong , playPause } from '../redux/features/playerSlice';
import Style  from '../components/DetailsHeader.module.css'
import {  useGetSongkeysQuery, useGetAdminSongQuery} from '../redux/services/shazamCore';
import { Helmet } from 'react-helmet';
import useVerify from '../hooks/use-verify';

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { songkey } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player )
    const { data : SongData } = useGetSongkeysQuery({songid})
    const { data , isFetching  , song } = 
    useGetAdminSongQuery({ songid });
    

    const handlePauseClick = () =>{
      dispatch(playPause(false))
     };

    const handlePlayClick = (song, i) =>{
    dispatch(setActiveSong({song , data , i}))
    dispatch(playPause(true))
    };



    return (
      <div>
          
       <Navbar />
       <div className='flex flex-col bg-background px-10 py-20 h-[70rem]'>
              <DetailsHeader  data={data} songid={songid} />

              
         <div className='mb-1'>
            <h2 className={Style.texty}>: تکس</h2>
         </div>
         <div className='m-0 pb-20'>
               {data?.map((song , i ) =>(
                  <p className={Style.lyrics}>{song.lyrics}</p>
                ))}
         </div>
         <RelatedSongs 
           SongData={SongData}
           isPlaying={isPlaying}
           activeSong={activeSong}
           handlePauseClick={handlePauseClick}
           handlePlayClick={handlePlayClick}
         />
       </div>
         <Footer />
      </div>
        )
}

export default SongDetails;
