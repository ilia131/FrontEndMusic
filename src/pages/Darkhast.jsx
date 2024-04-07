import React from 'react'
import { Navbar , Footer } from '../components'


import Style from './Aboutus.module.css'

const Darkhast = () => {
  return (
    <div>
        <Navbar />
        <div className='pt-20 bg-black'></div>

          <div className={Style.Aboutus}>
            <div className='bg-green-500 grid gap-4 rounded-md'>
                  <p className='text-center py-10 px-10 text-white'>برای همکاری و گذاشتن موزیک در سایت به شماره بنده پیام بدین 09910497942</p>
                    <div className='py-10'></div>
                    <div></div>
                    <div></div>
              </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Darkhast