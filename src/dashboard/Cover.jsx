import React , { useState, useEffect } from 'react'
import Style from './Cover.module.css'
import { useGetUUIddQuery } from '../redux/services/apiSlice'
import {useGetProfileViewQuery } from '../redux/services/shazamCore' 

const Cover = ({activeSong ,isPlaying , isActive, value, min, max, onInput, openSideBar , unique_id}) => {
  
   const {data } = useGetUUIddQuery(unique_id)
   const comment = data ? data.slice(0) : []
   const [currentIndex, setCurrentIndex] = useState(0);
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentIndex(prevIndex => (prevIndex + 1) % comment.length);
     }, 5000); // هر ده ثانیه اجرا شود

     return () => clearInterval(interval);
   }, [data,comment.length]);
  return (
    <div className='grid gap-10'>
   
    <div style={{ width: '200wv',
              objectFit:'cover'
      }} className='h-screen  bottom-0 absolute flex justify-center items-center  '>
          <div className={Style.wid}>
             <img  className={` h-screen sticky object-cover object-center w-[100%] flex justify-center align-middle `} src={activeSong.get_image}/>
         
           </div> 
          <div className='grid absolute text-center'>
          <p className=' bg-background p-1 text-white text-md'>{activeSong.title}</p>
          <p className=' bg-background p-1 text-white text-xs'>{activeSong.description}</p>
          </div>
      </div>
        <div className='absolute grid gap-5 justify-center items-center '> 
        <div>
       
       {comment && comment.length > 0 && (
         <div className={Style.comment}>
          <div className='flex justify-center gap-1 '>
            <div className='flex gap-2 bg-gray-400 p-1 rounded-xl r'>
           <img src={comment[currentIndex].get_image} height={25} width={25} className='rounded-full'/>
           <p className='text-center text-white text-xs pt-[0.3rem] justify-center'>{comment[currentIndex].content}</p>
           </div>
          </div>
         </div>
         )} 
       </div>
           <input
           type="range"
           step="any"
           value={value}
           min={min}
           max={max}
           onInput={onInput}
           className="md:block w-screen  h-1 mb-10 mx-4 appearance-none my10-10 2xl:mx-6 rounded-lg  bg-gradient-to-r from-blue-500 to-green-500 outline-none "
       />
        </div>
     
    </div>
  )
}

export default Cover