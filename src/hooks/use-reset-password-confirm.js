import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { useResetPasswordConfrimMutation } from '../redux/services/apiSlice'
import {toast} from 'react-toastify'





export default function useResetPasswordConfirm(uid , token) {
    const navigate = useNavigate();
    const [resetPasswordConfrim , {isLoading}] = useResetPasswordConfrimMutation()
    console.log(uid, token)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    })
    const {new_password, re_new_password} = formData;
    
    const onChange = (event) => {
          const {name , value} =event.target;

          setFormData({...formData, [name]: value})
    }

    const onSubmit = (event) => {
       event.preventDefault();
       
        const formData = new FormData();
        formData.append('new_password', new_password)
        formData.append('re_new_password', re_new_password)
        formData.append('uid' , uid)
        formData.append('token', token)
        console.log(new_password)
   
           

        resetPasswordConfrim(formData)
            .unwrap()
            .then(() => {
               toast.success('تغییر پسورد با موفقیت انجام شد')
               navigate('/login')
            })
            .catch(() => {
                toast.error('خطا در تغییر پسورد')
            })
    
    }

    return {
        new_password,
        re_new_password,
        isLoading,
        onChange,
        onSubmit,
    }

}