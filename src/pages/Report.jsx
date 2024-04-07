import React from 'react'
import { Navbar , Footer } from '../components'


import Style from './Aboutus.module.css'

const Report = () => {
  return (
    <div className='h-screen'>
        <Navbar />
        <div className='h-screen py-20'>
          <div className={Style.Aboutus}>
            <div className='bg-green-500 grid gap-4 rounded-md '>
                  <p className='text-center py-10 px-10 text-white'>در صورت داشتن هرگونه مشکل به  شماره بنده تو تلگرام پیام بدین 09910497942</p>
                    <div className='py-10'></div>
                   
              </div>
          </div></div>
        <Footer/>
    </div>
  )
}

export default Report