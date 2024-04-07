import React, {useState} from 'react';
import {GrClose} from 'react-icons/gr';
import { Link , useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/common'

import { useGetUUIddQuery , usePostCommentMutation , useRetrieveUserQuery} from '../redux/services/apiSlice';
import Style from '../components/SideBar.module.css'
import moment from 'moment';

const Test2 = () => {
    const {unique_id} = useParams()
    //  const navigate = useNavigate();
     const [usePost ,  {isLoading}] = usePostCommentMutation()
     const { data : User} = useRetrieveUserQuery()
     const [isClicked, setIsClicked] = useState(false);
     const [newComment, setNewComment] = useState(null);

     const[content , setContent] = useState('')
     const { data } = useGetUUIddQuery(unique_id)
     const handleupload = () => {
       setIsClicked(true)
       setNewComment(content)

       const formData = new FormData
       formData.append('content', content)
       formData.append('post', unique_id)
       
       setTimeout(() => {
         usePost({formData , unique_id})
         
       }, 300);
    }
    const handlenavigate = () => {
      navigate('/dashboard/:unique_id')
    }
  return (
    <div className=' bg-black  h-screen grid justify-center align-middle '>   
      <div className='grid  align-middle text-center justify-center'>
        <div className='bg-black h-[23rem]   overflow-y-scroll '>
        <div className={Style.sideBar_menu1}>
        {data?.map((comment , i)=> (
                <div className=' grid gap-10 py-4'>
                <div className='flex gap-3 '>
                   <Link to={`/profileView/${comment.author}`} className='text-white  text-xs pt-1'>{comment.author}</Link>
                   <p className='text-white text-[10px] pt-1'> {moment(comment.created).fromNow()}</p>
                </div> 
                  <div className='p-1'>
                     <p className='text-white p-3 bg-background text-xs'>{comment.content}</p> 
                  </div> 
              </div>
                ))}
                  {isClicked? 
                   <div className=' grid gap-3'>
                    <div className='flex gap-4 '>
                      <p className='text-white text-md '>{User?.artistname}</p>
                      <p className='text-white text-[10px] pt-1'> {moment().fromNow()}</p>
                    </div> 
                     <div className='p-1'>
                     <p className='text-white p-4 bg-background text-sm'>{newComment} </p> 
                  </div> 
                  </div>
                  : null  
                  }
                </div></div>
                  

            </div> 
      <div className={Style.sideBar_menu1}>
    <div className='flex  bg-black '> 
     <div className='mb-10 bg-green-400'> 
     
     {isLoading ? <Spinner sm className='text-white text-center  py-3 px-2 bg-green-400' /> :
       <button className='text-white text-center  py-3 px-2  bg-gradient-to-r  from-green-900  to-purple-900' onClick={handleupload}>کامنت</button>}
       </div>
       
       <input              
          onChange={(e)=> setContent(e.target.value)}
          className='bg-background h-[3rem] border-0 text-center outline-none text-white' 
          placeholder='کامنت خود را اضافه کنین'/>
       
         </div>
      
        </div>

       
  </div>
  )
}

export default Test2