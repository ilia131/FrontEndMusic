import React, {useState} from 'react';
import {GrClose} from 'react-icons/gr';
import { Link , useNavigate} from 'react-router-dom';

import { BsSearch , BsInstagram } from 'react-icons/bs'
import { Spinner } from '../components/common'

//INTERNAL IMPORT
import Style from './SideBar.module.css';
import ReactPlayer from 'react-player';
import { useGetUUIddQuery , usePostCommentMutation , useRetrieveUserQuery} from '../redux/services/apiSlice';
import { useSelector } from "react-redux";
import Cover from '../dashboard/Cover';
import moment from 'moment';
const SideBar = ({song , unique_id}) => {
    // const { unique_id } = useParams();

    const currentTime = moment()
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { data : User} = useRetrieveUserQuery()
    const navigate = useNavigate();
    const { data } = useGetUUIddQuery(unique_id)
    const [usePost, {isLoading}] = usePostCommentMutation()
    const[content , setContent] = useState('')
    
    const [newComment, setNewComment] = useState(null);
   
    const [isClicked, setIsClicked] = useState(false);
   



    const handleupload = () => {
      setIsClicked(true)
      setNewComment(content)
      const formData = new FormData
      formData.append('content', content)
      formData.append('post', unique_id)
      
      setTimeout(() => {
        usePost({formData , unique_id})
        
      }, 100);

   
   }
    return (
      <div className='w-auto md:grid hidden '>
        <div className='bg-black md:h-[10rem]  md:w-auto h-40  overflow-y-scroll scroll-m-2'>    
            <div className={Style.sideBar_menu1}>
              <div className=''>
            <div className=''>
              
             {data?.map((comment , i)=> (
                <div className=' grid gap-3'>
                <div className='flex gap-4 '>
                   <img height={30} width={30} src={comment.get_image} className='rounded-full pt-1'/>
                   <Link to={`/profileView/${comment.author}`} className='text-white text-md pt-2'>{comment.author}</Link>
                   <p className='text-white text-xs pt-3'> {moment(comment.created).fromNow()}</p>
                </div> 
                  <div className='p-1'>
                     <p className='text-white p-4 bg-background text-sm'>{comment.content} </p> 
                  </div>
                   
              </div>
                ))}
                {isClicked? 
                   <div className=' grid gap-3'>
                    <div className='flex gap-4 '>
                    <img height={30} width={30} src={User?.get_image} className='rounded-full'/>
                      <p className='text-white text-md pt-2'>{User?.artistname}</p>
                      <p className='text-white text-xs pt-3'> {moment().fromNow()}</p>
                    </div> 
                     <div className='p-1'>
                     <p className='text-white p-4 bg-background text-sm'>{newComment} </p> 
                  </div> 
                  </div>
                  : null  
                  }
            </div>
              
              {/* <video width='100%' height='100%' controls>
                   <source src='../../cyberpunk-city.1920x1080.mp4' type='video/mp4' />
              </video> */}
               {/* <ReactPlayer url='https://www.youtube.com/watch?v=-ZfRAkzVt-Q' controls width='100%' height='90%'/> */}
             </div>       
          </div>
        </div>
           <div className='grid gap-3'>
            {!isAuthenticated?   null :
            <div className='grid gap-3'>
              
             <input              
               onChange={(e)=> setContent(e.target.value)}
               className='bg-background h-[3rem] w-auto border-0 text-right outline-none p-3' 
               placeholder='کامنت خود را اضافه کنین' required={false}/>
               <div className='flex justify-center align-middle text-center '>
              {isLoading ? <Spinner sm /> :
               <button 
                className='bg-red-400 
                 p-2 w-20 rounded-md
                  hover:bg-background
                  hover:text-white ' onClick={handleupload}>کامنت</button>
                  }
              </div>
               </div> }
           </div>
     </div>
    )
   
    
};

export default SideBar;

