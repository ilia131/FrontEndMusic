import React from 'react'
import Style from '../../../login/login.module.css'

import { PasswordResetConfirmForm } from '../../../../components/forms'
import { useParams } from 'react-router-dom'
const NewPassword = () => {
  const {uid , token} = useParams()
   return (
    <div className='h-screen bg-gradient-to-r  from-green-900  to-purple-900 '>
    <div className={Style.login}>
     <div className='grid text-center text-white p-10 justify-center'>
       <div className={Style.login_box}>
          <h2 className={Style.login_box_h2}>
            پسورد جدید
          </h2>
     
  

       <PasswordResetConfirmForm uid={uid} token={token}/>

    
        </div>
     </div>
   </div>
  </div>
  )
}

export default NewPassword