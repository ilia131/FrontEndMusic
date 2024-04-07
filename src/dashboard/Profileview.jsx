import React , {useState}from 'react'
import {useGetProfileViewQuery } from '../redux/services/shazamCore' 
// useGetCommentViewQuery , useGetUUIDQuery
import { useParams } from 'react-router-dom';
import Style from '../components/Navbar.module.css'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../components';
import Style1 from './PortalBox/Portalbox.module.css'
import { SongBar3 } from '../components'
import {useDispatch, useSelector} from 'react-redux'
import { setActiveSong , playPause } from '../redux/features/playerSlice';
import {  usePostViewMutation } from '../redux/services/apiSlice';
import { Setup } from '../components/utils'
import Follow from './Follow';
import {  useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

import {FollowBox , FollowPortal, FollowingBox, FollowingPortal} from './index'

const Profileview = () => {
    const {  artistname  } = useParams();
    const { data , isError} = useGetProfileViewQuery(artistname)
    const records = data?.profiles?.slice(0)
    const { activeSong , isPlaying }  = useSelector((state) => state.player);
    const [useview] = usePostViewMutation()
    const [isOpen, setIsOpen] = useState(false)
    const [openfollowing, setOpenFollowing] = useState(false)
    const navigate = useNavigate();
    
    let TotalAllView = 0
    {records?.map((song, i)=> (
      TotalAllView += song.total_views
    ))}


 

    const handleSetOpen = () => {
      setIsOpen(true)
    }

    const handleOpenFollowing = () => {
      setOpenFollowing(true)
    }
    if (isError) {
      navigate('/')
    }

    let posts = 0
      
    {data?.profiles.map((song , i) => ( 
       posts =+ i + 1
    ))}

    const dispatch = useDispatch();
  
    const handlePauseClick = () =>{
        dispatch(playPause(false))
    };

    const handlePlayClick = (song, i) =>{
        dispatch(setActiveSong({song , data , i}))
        dispatch(playPause(true))
      };
  return (
    <div className='h-screen bg-gradient-to-b from-yellow-900/80 via-background to-background'>
           <Navbar />
           <Helmet>
           <title >     {artistname} | ونگارد موزیک</title>
           <meta property="og:description" content={`${artistname} صفحه ی`} />
           </Helmet>
           <div className='py-10 max-md:hidden'></div>
                 <div  style={{ width: '100%', height: '50vh', 
                       objectFit: 'cover'  ,
                       backgroundImage: `url(${data?.user_accounts[0].get_background})` ,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       position: 'relative',  }} className='md:flex  gap-[2rem] hidden'
                     > 
                            
                  <div className=''>
                      <div className='pt-10 pl-10 flex '>
                           <img src={data?.user_accounts[0].get_image}
                             className='sm:w-40 sm:h-40 h-20 w-20 rounded-full
                             object-cover   shadow-black shadow-xl  ' 
                             />
                          
                             </div>
                      </div> 
                        <div>
                            <p className='hidden md:flex mb-2 justify-center align-middle sm:text-3xl text-xl  
                                text-white   mt-[7rem]  font-semibold'>{data?.user_accounts[0].artistname}</p>
                               <div className='flex gap-3 bg-gray-400 p-2 px-1 rounded-md'>
                                <p className='text-white font-bold'>Monthly View</p>
                                <p className='text-white font-bold'> : </p>
                                <p className='text-white font-bold'>{TotalAllView}</p>
                               </div>
                        </div>
                        

                        <div  className='text-center md:ml-[40rem] align-middle mt-[6rem] text-white hidden md:grid'>
                              <Follow 
                              artistname={artistname} 
                              posts={posts} 
                              open={isOpen}
                              handleSetOpen={handleSetOpen}
                               /> 
                           <FollowBox open={isOpen} onClose={() => setIsOpen(false)}>
                                 <FollowPortal open={isOpen} onClose={() => setIsOpen(false)} artistname={artistname}/>
                              </FollowBox>
                             
                        </div>
                  </div>
                  <div className='md:hidden'>
                    <div className='h-64 bg-gradient-to-b from-yellow-900 via-transparent to-transparent'>
                    <div className='pt-10 pl-7 grid '>
                          <div className='flex gap-5 justify-start text-center items-center pt-10'>
                           <img src={data?.user_accounts[0].get_image}
                             className='sm:w-40  h-20 w-20 rounded-full
                             object-cover   shadow-black shadow-xl md:hidden ' />
                            <div className='grid gap-2'>
                             <p className=' md:flex justify-center align-middle sm:text-3xl text-xl  uppercase
                                text-white   font-semibold mr-3'>{data?.user_accounts[0].artistname}</p>
                              <div className='flex gap-3 bg-gray-400 p-1  rounded-md'>
                                <p className='text-white text-xs font-bold'>Monthly View</p>
                                <p className='text-white text-xs font-bold'> : </p>
                                <p className='text-white text-xs font-bold'>{TotalAllView}</p>
                               </div></div>
                             </div>
                             <Follow 
                             artistname={artistname} 
                             posts={posts} 
                             open={isOpen}  
                             handleSetOpen={handleSetOpen}
                             />
                             
                         </div>
                    </div>
  
                  </div>         
           
                  
            <div className='bg-background bottom-0 px-6  '>
               <div className={Style1.text}>
                  <p className='text-right py-4 text-green-400 text-lg p-10 mt-20 max-md:text-xs max-md:text-center'>موزیک های این آرتیست</p>
                  <div className='overflow-y-scroll h-[30rem] p-2'>
                {records?.map((song , i) => (
                  <div className='p-1'>
                  <SongBar3
                    key={i}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                    i={i}
                    className=''
                   />
                  </div>
                ))} 
                </div>
               </div>
             
                
              
               
              
            </div>        
            <div className='h-[10rem] bg-background'></div>
            <Footer />
    
             
          </div>
          
      )
}

export default Profileview