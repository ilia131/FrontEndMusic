import React from 'react'
import { logout as setLogout } from '../redux/features/authSlice';
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsSearch } from 'react-icons/bs'
import { CiMusicNote1 } from "react-icons/ci";
import Style from './Navbar.module.css'
import { useNavigate , Link } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import {  useLogoutMutation} from '../redux/services/apiSlice';
import { BiLogOut } from "react-icons/bi";
const Underfooter = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch();

    const handleLogout = () => {
        logout(undefined)
           .unwrap()
           .then(() => {
             dispatch(setLogout())
             navigate('/login/')
             
            
      
           })
           .finally(() => {
              navigate('/')
           })
        }
  return (
    <div className={Style.text1}>
    <div className='
      flex bg-gradient-to-r  from-green-900  to-purple-900 h-[2rem] align-middle text-center justify-center gap-8   '>
         <div className='grid  justify-center items-center text-center '>

          <Link to={'/'}className='bg-transparent h-8 w-8 flex justify-center items-center rounded-md cursor-pointer'>
              <GoHome className='text-white object-contain ' />
           </Link>
             
            
            
                {/* <p className='text-white text-center text-[0.5rem] '>خانه</p>   */}
         
         </div>
         <div className='grid  justify-center items-center text-center gap-3'>

            {isAuthenticated? (    
                <div className='flex gap-5'>
                       <div className='grid gap-2 ustify-center items-center text-center'>
                           <div onClick={handleLogout} className=' bg-transparent h-8 w-8  flex justify-center items-center rounded-md cursor-pointer'>
                                    <BiLogOut className='text-white  ' />
                                      </div> 
                                       {/* <p className='text-white text-xs '>خروج</p> */}
                                    </div>
                                    <div className='grid gap-2'>
                                          <Link to={'/dashboard/'} className=' bg-transparent ml-4 h-8 w-8 flex justify-center items-center rounded-md cursor-pointer'>
                                          <MdOutlineManageAccounts className='text-white  ' />
                                        
                                        </Link>  
                                      
                                       {/* <p className='text-white text-xs'>داشبورد</p>  */}
                                       </div>
                                       </div> ) :  (
                                        <div className='grid gap-2 ustify-center items-center text-center'>
                                    <Link to={'/login/'} className=' bg-transparent  h-8 w-8 flex justify-center items-center rounded-md cursor-pointer'>
                                   <CgProfile className='text-white  ' />
                       </Link>
                           {/* <p className='text-white text-xs'>لاگین</p> */}
                        </div>
                  )}
                                      
         
            
         
         </div>
         <div className='grid  justify-center items-center text-center gap-2'>
          <Link to={'/search/'} className=' bg-transparent  h-8 w-8 flex justify-center items-center rounded-md cursor-pointer'>
              <BsSearch className='text-white object-contain ' />
           </Link>
             
            
              {/* <p className='text-white text-center text-xs'>جستجو</p> */}
         
         </div>
         <div className='grid  justify-center items-center text-center '>
          <Link to={'/songs/'} className='bg-transparent h-8 w-8 flex justify-center items-center rounded-md cursor-pointer'>
              <CiMusicNote1 className='text-white object-contain  text-center' />
           </Link>
             
            
              {/* <p className='text-white text-xs'>آهنگ</p> */}
         
         </div>
      </div>
    </div>
  )
}

export default Underfooter