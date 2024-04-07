import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { LiaCommentSolid } from "react-icons/lia";
import PlayPause from './PlayPause';
import CommentS from '../dashboard/CommentS';
import SideBar from './SideBar';
import { SideBar2  , Like} from '.';
import { useParams } from 'react-router-dom';
import Test2 from '../dashboard/Test2';
import { useNavigate } from "react-router-dom";
import {  useGetCheckLikeQuery, useGetDeleteMutation, useGetLikeQuery  , useGetlikeSMutation} from '../redux/services/apiSlice';
import { FaDeleteLeft } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import {   useGetViewQuery ,  usePostViewMutation 
  , usePostLikeMutation ,
   useGetUnlikeMutation , useRetrieveUserQuery} from '../redux/services/apiSlice';
import { FaPlay } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { useSelector } from "react-redux";





const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick  }) =>{
  const [useview] = usePostViewMutation()
  const { data  : Me} = useRetrieveUserQuery();
  const artistname = Me?.artistname
  
  const [uselike] =  usePostLikeMutation()
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [openlike, setOpenLike] = useState(false);

  
  





  //VIEW
  const handleView = () => {
    const formData = new FormData
    formData.append('views_count',  '1')
    formData.append('postview', unique_id)  
      useview({formData , unique_id})
    
 } 
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const unique_id = song?.unique_id
  const { data : Like1 } = useGetLikeQuery(unique_id)

  const { data } = useGetViewQuery(unique_id)   
  const ids = song?.id

   const navigate = useNavigate();
  const handlenavigate = () => {
    navigate(`/dashboard/${unique_id}`)
    
   }

   const handlenavigate1 = () => {
    navigate(`/comment/${unique_id}`)
    
   }
  //DELETE
  const [delete1] = useGetDeleteMutation()
  const handleDelete = () => {
     const formData = new FormData
     formData.append('id', ids)
     delete1({formData, ids})
     .unwrap()
     .then(() => {
       window.location.reload();
    })    


  }



  

  //DELETE LIKE
  

  const [delete2] = useGetUnlikeMutation()
  
 

  //Get Check Like
  



  //SIDE BAR
  const openSideBar = ()=> {
    if(!openSideMenu) {
        setOpenSideMenu(true)
        // alert(unique_id)
    } else {
        setOpenSideMenu(false)
    }
   }

   //VIEW COUNT
   let totalViewsCount = 0;
   {data?.map((comment , i)=> (
    totalViewsCount += comment.views_count
   ))}
   

   //openSideLike
   const { data : Check  ,isLoading } = useGetCheckLikeQuery({unique_id, artistname})
   let CheckLikeCount = 0
   {Check?.map((like , i ) =>(
      CheckLikeCount += like.like_count
   ))}
    
   const BoolLike = () => {
     if (CheckLikeCount == 1) {
       return true
     } else  {
       return false
     }
   }
   const isLiked = BoolLike();
  //LIKE COUNT









  let totalViewsCount1 = 0;
  {Like1?.map((comment1 , i)=> (
   
   totalViewsCount1 += comment1.like_count
  ))}

  const [totalViewsCount2, setTotalViewsCount2] = useState(totalViewsCount1);
  const handlelike = () => {
    if (!isLiked) {
    setOpenLike(true); 
    setTotalViewsCount2(totalViewsCount1 + 1)
    } else {
     setOpenLike(false)
     setTotalViewsCount2(totalViewsCount1 - 1)
    }
   const formData = new FormData
   formData.append('like_count',  '1')
   formData.append('postlike', unique_id)  
     uselike({formData , unique_id })
  }


  const handleDeleteLike = () => {
    if (isLiked) {
      setOpenLike(true);
      setTotalViewsCount2(totalViewsCount1 - 1)
      } else {
       setOpenLike(false)
       setTotalViewsCount2(totalViewsCount1 + 1)
      }
    const formData = new FormData
    formData.append('unique_id', unique_id)
    formData.append('artistname', artistname)
    delete2({formData, unique_id, artistname})
  }


 return (
   <div className={`w-full flex flex-row items-center  ${activeSong?.id === song?.id ? 'bg-header' : 'bg-gradient-to-r  from-green-900  to-purple-900'} py-2 p-4 rounded-lg  mb-2`}>
    <div className="flex-1 flex flex-row justify-between items-center">
    {openSideMenu ? null : (
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.get_image}
        alt={song?.title}
      />
      )}
      <div className="flex-1 flex flex-col justify-center mx-3">
      {openSideMenu ? null : (
        <div>
    <div>
     <div className="w-[50%]">
        <p className="text-xs md:text-base truncate font-bold text-white max-md:text-xs">
            {song?.title}
        </p>
        </div>
    </div>
    <div className="w-[50%]">
        <p className=" text-xs md:text-base truncate text-gray-300 mt-1">
           {song?.description}
        </p>
        </div>
        </div>
        )}
        {openSideMenu ? (
              <div>
                  <div className='relative '>
                        <SideBar2 
                           song={song}
                           setOpenSideMenu={setOpenSideMenu}
                           unique_id={unique_id}  
                           />
                   </div>
                   <div>
                     <TiDelete className='text-white' onClick={openSideBar} />
                   </div>
                </div>
               ) : ( 
                 <div>
                       <div className='flex gap-2 align-middle'>
                        <div className=''>
                        <FaPlay className='text-gray-500 h-3 w-3'/> 
                         </div>
                        <div >
                         <p className='text-gray-500 text-xs'>  {totalViewsCount}  </p>
                        </div>    
                       </div>       
                    <LiaCommentSolid className='text-white hidden md:flex cursor-pointer' onClick={openSideBar}/>
                    <LiaCommentSolid className='text-white md:hidden ' onClick={handlenavigate1}/>
                 </div>
                )}
      </div>
      
    </div>
    
        <div className='flex gap-1'>
         
           
          {openSideMenu ? null : (
               <div className='flex gap-4 cursor-pointer'>  
              {isAuthenticated?  (
                <Like
                 isLiked={isLiked}
                 openlike={openlike}
                 totalViewsCount2={totalViewsCount2}
                 totalViewsCount1={totalViewsCount1}
                 handleDeleteLike={handleDeleteLike}
                 handlelike={handlelike}
                />
              ) : (
                <div className='text-white p-1 grid justify-center text-center gap-1'>
                <FcLikePlaceholder   />
                <p className='text-xs'>{ totalViewsCount1 }</p>
                </div>
              ) }
                <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                handleView={handleView}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={() => handlePlayClick(song, i)}
               /> 
              
               </div>  )}
              </div>
                 
  </div>
 )
};

export default SongBar;