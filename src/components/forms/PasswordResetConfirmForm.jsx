import React from 'react'

import { useResetPasswordConfrim } from '../../hooks'
import { Form } from '../../components/forms'
const PasswordResetConfirmForm = ({uid  , token}) => {
  const {new_password, re_new_password , isLoading ,onChange , onSubmit} = useResetPasswordConfrim(uid , token)
  
  const config =[
    {
      labelText: 'پسورد جدید',
      labelId:'new_password',
      type:'password',
      onChange,
      value:new_password,
      required : true
    },
    {
      labelText: 'تایید پسورد جدید',
      labelId:'re_new_password',
      type:'password',
      onChange,
      value:re_new_password,
      required : true
    }
  ]
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='تغییر پسورد'
      onChange={onChange}
      onSubmit={onSubmit}
      
    />
  )
}

export default PasswordResetConfirmForm