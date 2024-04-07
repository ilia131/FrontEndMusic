import React from 'react'
import { useResetPassword } from '../../hooks'
import { Form } from '../../components/forms'
const PasswordResetForm = () => {
  const {email , isLoading ,onChange , onSubmit} = useResetPassword()
  const config =[
    {
      labelText: 'آدرس ایمیل',
      labelId:'email',
      type:'email',
      onChange,
      value:email,
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

export default PasswordResetForm