import React from 'react'
import { Navbar , Footer } from '../components'


import Style from './Aboutus.module.css'

const Contactus = () => {
  return (
    <div>
        <Navbar />
        <div className='pt-4 bg-black'></div>
          <div className={Style.Aboutus}>
            <div className='pt-10 bg-black'></div>
            <div className='bg-green-500 grid gap-4 rounded-md'>
                  <p className='text-center py-10 px-10 text-white'>برای ارتباط با ما به شماره ی  09910497942 در تلگرام پیام بدین</p>
                    <div className='py-10 text-center text-white font-bold bg-black text-xl'>instagram : vanguardmusics</div>
                    <div></div>
                    <div></div>
              </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Contactus