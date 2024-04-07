import { useState } from 'react';
import { useResetPasswordMutation } from '../redux/services/apiSlice'
import {toast} from 'react-toastify'





export default function useResetPassword() {
    const [resetPassword , {isLoading}] = useResetPasswordMutation()

    const [email, setEmail] = useState('')

    const onChange = (event) => {

        setEmail(event.target.value)
    }

    const onSubmit = (event) => {
       event.preventDefault();
     
        resetPassword(email)
            .unwrap()
            .then(() => {
               toast.success('ایمیل خود را برای تغییر پسورد چک کنید')
                
            })
            .catch(() => {
                toast.error('ایمیل شما وجود ندارد')
            })
    
    }

    return {
        email,
        isLoading,
        onChange,
        onSubmit,
    }

}