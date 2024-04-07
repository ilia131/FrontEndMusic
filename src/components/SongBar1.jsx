import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { LiaCommentSolid } from "react-icons/lia";
import PlayPause from './PlayPause';
import CommentS from '../dashboard/CommentS';
import SideBar from './SideBar';
import { SideBar2 } from '.';
import { useParams } from 'react-router-dom';
import Test2 from '../dashboard/Test2';
import { useNavigate } from "react-router-dom";
import { useGetDeleteMutation } from '../redux/services/apiSlice';
import { FaDeleteLeft } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) =>{ 
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const unique_id = song?.unique_id
  const ids = song?.id
  // const[unique_id, SetUinque_id] = useState('')
  // const commentunique_id = song?.comments?.post
  
  // const navigate = useNavigate();
  // const handlenavigate = () => {
  //   navigate(`/dashboard/${unique_id}`)
    
  // }

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

  const openSideBar = ()=> {
    if(!openSideMenu) {
        setOpenSideMenu(true)
        //  alert(unique_id)
    } else {
        setOpenSideMenu(false)
    }
   }
   

 return (
   <div className={`w-full flex flex-row items-center hover:bg-gray-900 ${activeSong?.title === song?.title ? 'bg-header' : 'bg-gradient-to-r  from-green-900  to-purple-900'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3"></h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.get_image}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
      {openSideMenu ? null : (
    <div>
          <div className="w-[50%]">
        <p className="text-md md:text-xl font-bold truncate text-white max-md:text-xs ">
            {song?.title}
        </p>
        </div>
    </div>
)}      <div className="w-[50%]">
        <p className="text-xs md:text-base truncate text-gray-300 mt-1 w-full ">
           {song?.description}
        </p>
        </div>
      </div>
    </div>
      <div>
         
        </div>  
        <div className='flex gap-4'>
       
             
               <div className='flex gap-3'>  
             
                <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={() => handlePlayClick(song, i)}
               /> 
               </div> 
              </div>
                 
  </div>
 )
};

export default SongBar;