import React from 'react'
import Style from '../src/dashboard/PortalBox/Portalbox.module.css'
import {Link , useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()


    const handleNagivate = () =>{
        setTimeout(() => {
              navigate('/ ')
              window.location.reload();
           }, 200);
    }
  return (
    <div className='h-screen bg-background grid justify-center text-center  items-center'>                
        <div className={Style.text1}>
                <p className='text-2xl'> |:     این صفحه وجود ندارد </p>  
             </div> 
         <div className={Style.text1}>
             <div onClick={handleNagivate}  className=' text-center
                flex items-center justify-center
                 bg-green-400 p-4 
                 cursor-pointer ' >صفحه اصلی</div>
         </div>
</div>
  )
}

export default NotFound