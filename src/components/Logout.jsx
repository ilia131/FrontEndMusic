import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { setAuth, logout as setLogout  , finishInitialLoad} from '../redux/features/authSlice';
import {  useLogoutMutation} from '../redux/services/apiSlice';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate , Link } from "react-router-dom";

const Logout = () => {
    const [logout ,  { isLoading }] = useLogoutMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout(undefined)
           .unwrap()
           .then(() => {
             dispatch(setLogout())
           })
       
     
        }
  return (
    <div className="bg-gradient-to-r  from-green-900 text-white to-purple-900 w-10 flex justify-center items-center rounded-md cursor-pointer"  onClick={handleLogout}>  
       
       <BiLogOut />
       
 </div>
  )
}

export default Logout