import React , {useState} from 'react'
import {   useGetallFollowQuery  , useGetallFollowingQuery  } from '../../redux/services/apiSlice';
import { Link } from 'react-router-dom';

const FollowPortal = ({artistname }) => {
  const {data} = useGetallFollowQuery({artistname})
  const {data : following} = useGetallFollowingQuery({artistname})
  console.log(following)
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  return (
    
    <div className='text-white grid justify-center align-middle text-center bg-gradient-to-r  from-green-900  to-purple-900'> 
    <div className='flex gap-10 justify-center text-center py-2 '>
      <button className='bg-background p-2 0 rounded-md' onClick={() => { setShowFollowers(true); setShowFollowing(false); }}>Followers</button>
      <button className='bg-background p-2 rounded-md' onClick={() => { setShowFollowing(true); setShowFollowers(false); }}>Following</button>
      </div>
    <div className='flex'>
      <div className='p-4 h-[25rem] max-md:h-[10rem]  rounded-md overflow-hidden overflow-y-scroll'>
        <p className='px-[7.5rem] max-md:px-[5rem] scroll-m-2'></p>
        {showFollowers && 
          data.map((follower, i) => (
            <div className='grid gap-3 py-2'>
              <div className='flex gap-4 px-1 bg-gradient-to-r ' key={i}>
                <img className='rounded-full my-2' src={follower.followerpic} alt='follower_pic' style={{ width: '50px', height: '50px' }} />
                <Link to={`/ProfileView/${follower.authorfollow}`} className='my-5 max-md:text-xs'>{follower.authorfollow}</Link>
              </div>
            </div>
          ))
        }
     
        {showFollowing && 
          following.map((follower, i) => (
            <div className='grid gap-3 py-2'>
              <div className='flex gap-4 px-1 bg-gradient-to-r ' key={i}>
                <img className='rounded-full my-2 ' src={follower.followingpic1} alt='follower_pic' style={{ width: '50px', height: '50px' }} />
                <Link to={`/ProfileView/${follower.authorfollow1}`} className='my-5 max-md:text-xs' >{follower.authorfollow1}</Link>
              </div>
            </div>
          ))
        }
      </div>  </div>
    </div>
  )
}

export default FollowPortal