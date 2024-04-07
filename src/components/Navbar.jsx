import { useState } from "react";

import { useNavigate , Link } from "react-router-dom";
import { Disclosure} from '@headlessui/react'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

import { FiSearch } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
import {FaCartShopping} from 'react-icons/fa6'
import {HiOutlineWallet} from 'react-icons/hi2'
import Style from './Navbar.module.css'
import resolvePathname from 'resolve-pathname';
import { useSelector , useDispatch } from 'react-redux';
import { Logout, SideBar } from './index.js'
import { logout as setLogout } from '../redux/features/authSlice';
import { NavLink } from './common';
import { CgProfile } from "react-icons/cg";
import {  useLogoutMutation} from '../redux/services/apiSlice';
import { BiLogOut } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Spinner } from '../components/common'


const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
   
  const [logout ,  { isLoading }] = useLogoutMutation()

   const openSideBar = ()=> {
    if(!openSideMenu) {
        setOpenSideMenu(true)
    } else {
        setOpenSideMenu(false)
    }
   }
  
   const handleNagivate = () =>{
    setTimeout(() => {
          navigate('/login/')
       }, 200);
}
      
const handleLogout = () => {
  setTimeout(() => {
  logout(undefined)
     .unwrap()
     .then(() => {
      
       dispatch(setLogout())
       navigate('/login')
 
      

     })

    }, 1000)
  }

const handleDashboard = () => {
    navigate('/dashboard/')
}


  const handleSubmit = (e) => {
   e.preventDefault()

   setTimeout(() => {
      navigate(`/search/${searchTerm}`);
      }, 500)
  }

  return (
  
    <div className=' top-0 px-10 max-md:px-10  py-4 flex    absolute'>
      
       <div className='flex  items-center justify-between gap-1'>
 
        <div className='flex pt-1 '>     
                
             

            <div className={Style.Navbar_box_under}>
             <div className='flex  gap-2 '> 
             {isAuthenticated ? (
              <div className="flex  gap-3 ">
                <div></div>
               <Logout />
              <button
              onClick={handleDashboard}
              className="bg-gradient-to-r text-white from-green-900  to-purple-900 w-10 flex justify-center items-center rounded-md cursor-pointer"
             >
              <MdOutlineManageAccounts />
             </button>
          </div>
           ) :  (
         <button
          onClick={handleNagivate}
          className="bg-gradient-to-r text-white from-green-900  to-purple-900 w-10 flex justify-center items-center rounded-md cursor-pointer"
        >
          <CgProfile />
        </button>
         )}
                <Link to='/songs' className=' bg-gradient-to-r text-white  from-green-900  to-purple-900  p-3 text-sm rounded-md'>موزیک</Link>
                
              </div>
             </div>
             
        
        </div>  
      <div className={Style.Navbar_box}>
        <div className={Style.Navbar_box_right}>
           <form onSubmit={handleSubmit}>
             <div className={Style.Navbar_box_right_box}>
                <div className={Style.Navbar_box_right_box_input}> 
                      <input placeholder='نام ارتیست , نام موزیک'
                       name="search-field"
                       autoComplete="off"
                       id="search-field"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       type="search"
                       className="text-white"
                        />
                       <BsSearch className={Style.search_icon} />
                </div>
              </div>
             </form>
              <div className={Style.Navbar_box_right_box_img}>
                <div className={Style.Navbar_box_right_img}>
                    <Link to='/'>
                         <p className='flex gap-3 p-1 backdrop-blur-sm max-md:hidden '>موزیک<div>|</div>ونگارد</p>
                    </Link> 
                </div>
               
              </div>
        
            </div>
         </div>
      </div>
      </div>
   
  
  )
}

export default Navbar