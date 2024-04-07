import React from 'react'
import {useGetallFollowingQuery} from '../../redux/services/apiSlice';

const FollowingPortal = ({artistname}) => {
  const {data} = useGetallFollowingQuery({artistname})
  return (
    
    <div className='text-white gird justify-center align-middle text-center bg-background '>
      <div className='p-4 overflow-y-scroll
      bg-gradient-to-r h-[25rem] scroll-m-2 rounded-md bg-black'>
       {data.map((follower , i) => (
        <div className='grid gap-3 py-2'>
        <div className='flex gap-4 px-1 bg-gradient-to-r from-green-900 via-green-600 to-green-400'  key={i}>
          
         <img className='rounded-full my-2 ' src={follower.followerpic} alt='follower_pic' style={{ width: '50px', height:'50px'}}/>
         <p className='my-5 uppercase '>{follower.authorfollow}</p>
        </div></div>
       ))}
       </div>
    </div>
  )
}

export default FollowingPortal