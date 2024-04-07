import React from 'react'
import Style from '../src/dashboard/PortalBox/Portalbox.module.css'
import {Link , useNavigate} from 'react-router-dom'
const Redirect = () => {
    const navigate = useNavigate()

    const handleNagivate = () =>{
        setTimeout(() => {
              navigate('/register/')
              window.location.reload();
           }, 500);
    }
  return (
    <div className='h-screen bg-background grid justify-center text-center  items-center'>
                    <div className={Style.text1}>
                        <p className='text-2xl'> برای ورود به داشبود باید اول ثبت کنید </p>      
                    </div> 
                    <div className={Style.text1}>
                       <div onClick={handleNagivate}  className=' text-center flex items-center justify-center bg-green-400 p-4 cursor-pointer ' >ثبت نام</div>
                    </div>
     </div>
  )
}

export default Redirect