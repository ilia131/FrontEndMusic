import React, { Fragment , useState , useEffect} from 'react';
import {  useNavigate } from "react-router-dom";
import {PodalPortal, Portalbox} from './index'
import {useGetProfileViewQuery } from '../redux/services/shazamCore' 

import Style1 from './PortalBox/Portalbox.module.css'
import { BiLogOut } from "react-icons/bi";
import {  useGetPostuserQuery, useLogoutMutation} from '../redux/services/apiSlice';
import { setActiveSong , playPause } from '../redux/features/playerSlice';
import { Footer, SongBar1 } from '../components'
import {useDispatch, useSelector} from 'react-redux'
import { logout as setLogout } from '../redux/features/authSlice';
import { Link } from 'react-router-dom'
import Style from '../components/Navbar.module.css'
import { setAuth } from "../redux/features/authSlice";
import { Setup } from '../components/utils'
import Style2 from './dashboard.module.css'
import { Spinner } from '../components/common'
import { IoReorderThreeOutline } from "react-icons/io5";

import {toast} from 'react-toastify'
const Dashboard = () => {
  const { activeSong , isPlaying }  = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data , isError ,  isLoading } = useGetPostuserQuery();
  const artistname = data?.artistname
  

  const { data : Profile } = useGetProfileViewQuery(artistname)
  const xdata = Profile?.profiles?.slice(0)
  const comments = data?.posts?.slice(0 , 10)
  const records = data?.posts?.slice(0 , 10)
  const handlePauseClick = () =>{
    dispatch(playPause(false))
   };
   
   const navigate = useNavigate();
   let TotalAllView = 0
    {xdata?.map((song, i)=> (
      TotalAllView += song.total_views
    ))}
  
    let TotalMoney = (TotalAllView * 100) / 60000

  const handlePlayClick = (song, i) =>{
     dispatch(setActiveSong({song , data , i}))
     dispatch(playPause(true))
   };

// POST QUERY 
   //   const navigate = useNavigate();

   //   const [post] = usePostMutation()
   

     const [isOpen, setIsOpen] = useState(false)

     const [logout ] = useLogoutMutation()
      
    //  const unique_id = song?.unique_id
    //  const commentunique_id = song?.comments?.post


   
    
     const handleLogout = () => {
      setTimeout(()=>{
      logout(undefined)
         .unwrap()
         .then(() => {
           dispatch(setLogout())
         })
         .finally(() => {
            navigate('/')
            windows.location.reload()
         })
        }, 1000)
      }
      
      const handleDashboard = () => {
        navigate('/')
    }

   if(isError) {
     navigate('/login/')
   }
   
   if(isLoading) {
     return (
       <div className='flex justify-center my-8'>
         <Spinner lg />
       </div>
     )
   }

     

 



  return (
      <Fragment>
         <div className='bg-gradient-to-b from-yellow-900/50 via-background to-background h-screen'>
             <div className='flex  justify-between pr-20 '>
            
           
             
       
              <div className=' p-2 px-20 max:md:px-4 max-md:p-1'>
                <div className='flex gap-8 max-md:gap-6 max-md:justify-center max-md:ml-7'> 
                    <div className={Style.dashboard}>
                              <Link className=' max-md:mt-0 max-md:mb-1 max-md:ml-1 text-black text-md cursor-pointer text-center
                    bg-gradient-to-r  from-green-900  to-purple-900
                    flex items-center justify-center
                   rounded-md 
                   hover:bg-green-500 w-[100px] h-[50px] mb-1  ' to={'/Profile/'}>پروفایل </Link> 
                              
                           </div> 
                          
                         <div className=' bottom-1 rounded-full max-md:hidden'> 
                          <div className={Style1.text}>
                           
                               <img width={40} height={40}  className='sm:w-10 w-10 sm:h-10 h-10 rounded-full
                             object-cover   shadow-black shadow-xl  md:visible hidden text-xs' 
                             
                             src={data?.get_image} 
                             alt = 'برای عکس پروفایل به پروفایل مراجعه کنید' /></div>
                           </div>  
                              <p className='text-white text-xl  mt-4 max-md:mt-4'>|</p>
                            <div className={Style1.text}>  
                            <Link className='md:hidden text-center
                    bg-gradient-to-r  from-green-900  to-purple-900
                    flex items-center justify-center
                   rounded-md mt-2
                   hover:bg-green-500 w-[100px] h-[50px] cursor-pointer ' to={'/dashboard/upload/'}>آپلود موزیک</Link>
                            </div>  
                            
                    </div> 
              
              </div>
            <div className={Style2.phone}>
              <div className='flex text-right mr-10 gap-5'>
             
                <button className=' bg-gradient-to-r  from-green-900  to-purple-900 
                    flex items-center justify-center
                    mt-3 rounded-md 
                   hover:bg-green-500 w-[70px] h-[50px] cursor-pointer'
                     onClick={handleLogout}
                     disabled={isLoading}

                     >
                       {isLoading ? <Spinner sm /> :  <BiLogOut />}
                   </button>  
                
                   <div className=' bg-gradient-to-r  from-green-900  to-purple-900 
                     flex items-center justify-center
                     mt-3 rounded-md text-center 
                    hover:bg-green-500 w-[90px] h-[50px] cursor-pointer '
                     onClick={handleDashboard}>
                      <p className={Style1.text}>
                         صفحه اصلی  
                         </p>
                    </div>
               <div className={Style.text}>
               <div className='flex gap-2'>
               <div className='text-center
                    bg-gradient-to-r  from-green-900  to-purple-900
                    flex items-center justify-center
                    mt-3 rounded-md 
                   hover:bg-green-500 w-[100px] h-[50px] cursor-pointer'
                   onClick={() => setIsOpen(true)}
                  >
                     <p className={Style1.text}> آپلود موزیک</p>
                  </div>
                  </div>
               </div>
               <PodalPortal open={isOpen} onClose={() => setIsOpen(false)}>
                 <Portalbox open={isOpen} onClose={() => setIsOpen(false)}/>
               </PodalPortal>
                </div>
            </div>
             </div>
               <div className=' '>

                  <div style={{ width: '100%', height: '50vh', 
                       objectFit: 'cover'  ,
                       backgroundImage: `url(${data?.get_background})` ,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       position: 'relative',  }}  >
                      <div className='pt-10 pl-10 flex gap-10 '>
                      <div className={Style1.text}>
                           <img src={data?.get_image}
                             className='sm:w-60 w-20 sm:h-60 h-20 rounded-full
                             
                             object-cover   shadow-black shadow-xl  ' 
                             alt = 'برای عکس پروفایل به پروفایل مراجعه کنی'/> </div>
                             <div className={Style1.text}>
                               <div className='text-xs md:hidden mt-10  px-2 rounded-md font-bold text-white  p h-[2rem] pt-2 bg-background'>Balance :    {TotalMoney.toFixed(4)} $</div>
                              </div>
                              <div className='md:flex mb-2 justify-center align-middle sm:text-3xl text-xl  
                                text-white   mt-[7rem]  font-semibold '>
                           
                                     <p className='bg-background h-[4rem] pt-3 p-4 rounded-md max-md:hidden text-md'>Balance :     {TotalMoney.toFixed(4)} $ </p>  
                                   
                                   </div>
                      </div>
                  </div>

               </div>
                    



            <div className='bg-background bottom-0  px-10 '>
               <div className={Style1.text}>
                  <p className='text-right py-4 text-green-400 text-lg p-10 mt-20 max-md:text-xs max-md:text-center'>موزیک های آپلود شده ی شما</p>
                  <div className='overflow-y-scroll h-[30rem] px-1'>
                {records?.map((song , i) => (
                  <div className='p-2 '>
                  <SongBar1 
                    key={i}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                    comments={song.comments}
                    i={i}
                    className=''
                   />
                  </div>
                ))}
                  </div>
               </div> 
               <div className='h-28 bg-background '></div>
                 <div>
               </div> 
              
            </div>
            <Footer />
           </div>
          
      </Fragment>
  );
}

export default Dashboard;





