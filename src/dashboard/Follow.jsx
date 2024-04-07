import React , {useState}from 'react'
import {useGetfollowMutation , useGetallFollowQuery ,
        useGetCheckFollowQuery , useGetUnFollowMutation , useRetrieveUserQuery , useGetallFollowingQuery} from '../redux/services/apiSlice'
import { useSelector } from "react-redux";
import {FollowBox , FollowPortal} from './index'
import { RiUserFollowLine } from "react-icons/ri";
import { RiUserUnfollowLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
const Follow = ({artistname , posts , handleSetOpen , isOpen , handleOpenFollowing}) => {
    const [usefollow] = useGetfollowMutation()
    const { data } = useGetallFollowQuery({artistname})
    const {data : User} = useRetrieveUserQuery()
    const authorfollow1 = User?.artistname
    const {data : Check} = useGetCheckFollowQuery({artistname , authorfollow1})
    const [unfollow] = useGetUnFollowMutation({artistname , authorfollow1})
    const [openfollow, setOpenFollow] = useState(false);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const {data : following} = useGetallFollowingQuery({artistname})
    const [checkuser , SetCheckUser] = useState(false)


    let Totalfollowing = 0

    {following?.map((comment , i)=> (
        Totalfollowing += comment.follow_count
     ))}

 


    let Totalfollow = 0


    {data?.map((comment , i)=> (
          Totalfollow += comment.follow_count
       ))}

    const [totalViewsCount2, setTotalViewsCount2] = useState(Totalfollow);
    let CheckLikeCount = 0
    {Check?.map((like , i ) =>(
          CheckLikeCount += like.follow_count
       ))}
    const handlefollow = () => {
        if (!isFollow) {
            setOpenFollow(true);
            setTotalViewsCount2(Totalfollow + 1)
            } else {
            setOpenFollow(false)
            setTotalViewsCount2(Totalfollow - 1)
            }
       const formData = new FormData
       formData.append('follow_count',  '1')
       formData.append('authorfollow1', artistname)  
         usefollow({formData , artistname })
         .unwrap()
         .then(() => {
          toast.success('با موفقیت فالو کردین')
         })
      }

      const BoolFollow = () => {
        if (CheckLikeCount == 1) {
          return true
        } else  {
          return false
        }
      }
      const isFollow = BoolFollow();
      const handleUnfollow = () => {
        if (isFollow) {
           setOpenFollow(true);
           setTotalViewsCount2(Totalfollow - 1)
           } else {
           setOpenFollow(false)
           setTotalViewsCount2(Totalfollow + 1)

           }
        
        unfollow({authorfollow1, artistname})
        .unwrap()
        .then(() => {
         toast.error('با موفقیت آنفالو کردین')
        })
      }
    

  return (
     
    <div className=''>
        <div className=' grid gap-8'> 
           <div className='flex align-middle text-center justify-center gap-[4rem] max-md:ml-10 max-md:gap-5 max-md:mt-2'>
           <div>
           <p className='text-white text-3xl cursor-pointer max-md:text-xs'>{posts}</p>
           <div >
            <p   className='max-md:text-xs max-md:text-white' >posts</p></div>  
           </div>
          
     {isAuthenticated? (
        <div className='text-center  cursor-pointer ml-2' onClick={handleSetOpen}>
            {isFollow ? (
                openfollow? (
                    <div>
                    <p className='text-white text-3xl  max-md:text-xs'>{totalViewsCount2}</p>  
                    <p className='text-center max-md:text-xs max-md:text-white'>follower</p>
                    </div>
                ) : (
                    <div>
                    <p className='text-white text-3xl  max-md:text-xs'>{Totalfollow}</p>  
                    <p className='text-center max-md:text-xs max-md:text-white'>follower</p>
                    </div>
                )
            ) : ( 
                openfollow? (
                    <div>
                    <p className='text-white text-3xl  max-md:text-xs '>{totalViewsCount2}</p>  
                    <p className='text-center max-md:text-xs max-md:text-white'>follower</p></div>
                ) : (
                    <div>
                      <p className='text-white text-3xl max-md:text-xs'>{Totalfollow}</p>  
                      <p className='text-center max-md:text-xs max-md:text-white'>follower</p>
                    </div>
                )

            ) }
                
           
        </div> ) : ( 
            
              <div>
              <p className='text-white text-3xl cursor-pointer max-md:text-xs' >{Totalfollow}</p>  
              <p className='text-center max-md:text-xs max-md:text-white'>follower</p>
              
              </div>
        )}
         <div onClick={handleSetOpen}>
           <p className='text-white text-3xl max-md:text-xs cursor-pointer max-md:text-white'   >{Totalfollowing}</p>  
            <p className='text-center max-md:text-xs cursor-pointer max-md:text-white'>following</p>
           </div>
        
         </div>
    {isAuthenticated? (
      
        <div>
       
        {isFollow? (
            openfollow? (
                <div>
                <button className='p-3 bg-white w-[20rem] text-black hover:bg-green-400 max-md:hidden' onClick={handlefollow}>Follow</button> 
               <RiUserFollowLine onClick={handlefollow} className='mr-10 md:hidden text-white'/>
                </div>
            ) : (
              <div>
                <button className='p-3 bg-white w-[20rem]
                 text-black hover:bg-green-400 max-md:hidden  hover:bg-gradient-to-r  from-green-900  to-purple-900' onClick={handleUnfollow}>Following</button>
                 <RiUserUnfollowLine onClick={handleUnfollow}  className='mr-10 md:hidden  text-white' />
              </div>


            )
        ) : (openfollow? (
           <div>
           <button className='p-3 bg-white w-[20rem] text-black  hover:bg-gradient-to-r  from-green-900  to-purple-900 max-md:hidden' onClick={handleUnfollow}>Following</button>
           <RiUserUnfollowLine  onClick={handleUnfollow} className='mr-10 md:hidden text-white' />
           </div>

        ) : (
            <div>
            <button className='p-3 bg-white w-[20rem] text-black  hover:bg-gradient-to-r  from-green-900  to-purple-900 max-md:hidden' onClick={handlefollow}>Follow</button>
            <RiUserFollowLine onClick={handlefollow} className='mr-10 md:hidden text-white' />
            </div>
        ))}
        </div>
       ) : (

        <div className='p-3 bg-white w-[20rem] text-black hover:bg-green-400 max-md:hidden  hover:bg-gradient-to-r  from-green-900  to-purple-900'>
         <Link to={'/login'}  className='' >Login</Link>
       </div> 
       )}
           </div>
    </div>
  )
}

export default Follow