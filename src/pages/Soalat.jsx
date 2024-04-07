import React from 'react'
import { Navbar , Footer } from '../components'


import Style from './Aboutus.module.css'

const Soalat = () => {
  return (
    <div>
        <Navbar />
        <div className='py-10 flex bg-gradient-to-r  from-green-900  to-purple-900'></div>
          <div className={Style.Aboutus}>
            <div className=' grid gap-10 '>
             <h1 className='text-white text-right p-4 font-bold'>تمامی حقوق مادی و معنوی مربوط به این سایت میباشد</h1>
                  <p className='text-right text-white pr-5'>چرا سایت ونگارد موزیک؟</p>
                  <span className='text-right text-white text-sm pr-5'>شما بر اساس ویو میتوانید پول دریافت کنید هر یک ویو صد تا تک تومان </span>
                  <p className='text-right text-white pr-5'>چه امکاناتی؟</p>
                  <span className='text-right text-white text-sm pr-5 pb-2'>امکاناتی نظیر کاور دلخواه ساخت بیت و میکس مستر با بالاترین کیفیت</span>
                
              </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Soalat