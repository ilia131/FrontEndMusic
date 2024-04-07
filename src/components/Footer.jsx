import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Footer.module.css'
import { BsInstagram, BsTwitter  } from 'react-icons/bs'

import { BsTwitch } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-background '>
       <div className='bg-gradient-to-r  from-green-900  to-purple-900 '>
          <p className={Style.footer_text}>
            با آپلود رایگان موزیک بر اساس ویو پول دریافت کنید 
          </p>
        </div>
      <div>
       <div className={Style.footer}>
       <div  className='flex max-md:grid text-xl gap-2 md:gap-6 '>
         <div className='text-white'>
            <Link to='https://twitter.com/VanguardCompany' className='hover:text-green-400'>
                <BsTwitter />
            </Link>
          </div>
          <div className='text-white'>
            <Link to='https://instagram.com/vanguardmusics' className='hover:text-green-400'>
               <BsInstagram />
            </Link>
          </div>
        </div>   <div className='grid gap-3   cursor-pointer'>
           
           
             <div  className=''>
               <p className='text-background py-2'></p>
             </div>       
         </div>
           <div className='flex gap-3 max-md:grid text-white cursor-pointer '>
           <Link to={'/aboutus/'} className=' text-white hover:text-green-400'>
                 <p>درباره ما</p> 
             </Link>
             
             <Link to={'/khadamat/'} className='hover:text-green-400'>
                 <p>خدمات</p>
              </Link>
              <Link to={'/soalat/'} className='hover:text-green-400'>
                 <p>سوالات</p>
             </Link>
               
          </div>
       
        </div>
        <div className='h-40 md:hidden'></div></div>
    </div>
  )
}

export default Footer