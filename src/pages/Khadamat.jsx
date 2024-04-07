import React from 'react'
import { Navbar , Footer } from '../components'


import Style from './Aboutus.module.css'

const Khadamat = () => {
  return (
    <div>
        <Navbar />
        <div className='pt-10  bg-black'></div>
          <div className={Style.Aboutus}>
            
            <div className='bg-gradient-to-r  from-green-900  to-purple-900 grid gap-1 rounded-md h-screen'>
             <h1 className='text-white text-right p-4 font-bold'>تمامی حقوق مادی و معنوی مربوط به این شرکت میباشد</h1>
                  <p className='text-right text-white text-sm py-2 px-6'>پخش موزیک درسایت و در اینستاگرام</p>
                  <p className='text-right text-white py-2  text-sm px-6'>داشتن تیم حرفه ای در زمینه ی ادیت فیلم ادیت عکس طراحی کاور و میکس و مستر و غیره</p>
              </div>
          </div>
          <div ></div>
        <Footer/>
    </div>
  )
}

export default Khadamat