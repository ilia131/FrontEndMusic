import React from 'react'
import { Navbar , Footer } from '../components'


import Style from './Aboutus.module.css'

const Aboutus = () => {
  return (
    <div>
        <Navbar />
        <div className='py-10 bg-background'></div>
          <div className={Style.Aboutus}>
            <div className='bg-gradient-to-r h-screen from-green-900  to-purple-900 grid gap-4 rounded-md'>
             <h1 className='text-white text-right p-4 font-bold'>تمامی حقوق مادی و معنوی مربوط به این سایت میباشد</h1>
              <p className='text-white  p-4 text-right'>اپلیکیشنی متفاوت و  با رابط کاربری عالی توسط شرکت ونگارد فراهم گردیده و قصد ما 
                این است که بهترین موزیک ها را در این سایت قرار داده و در ادامه بستر حمایت از موزیسین های با استعداد 
                را فراهم کنیم و در ادامه ما دارای تیمی هستیم بهترین کیفیت را به موزیسین ها ارایه میدهیم
              </p>
              <p className='text-white p-4 text-right'>این اپلیکیشن با زبان برنامه نویسی ریکت و جنگو ساخته شده و دیگر امکانات شرکت ونگارد طراحی سایت با طرح های دلخواه کاربران میباشد
                و ما هیچ محدودیتی برای ساخت اپلیکیشن نداریم 
              </p>
              <p className='text-white p-4 text-right'>برای کار باما شماره 09910497942 تماس بگیرین</p>
              <p className='text-white p-4 text-right'>مدیریت : ایلیا غلامی مهندس  فناوری اطلاعات</p>
              </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Aboutus