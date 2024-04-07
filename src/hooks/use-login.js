import { useState , ChangeEvent , FormEvent , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { useLoginMutation } from "../redux/services/apiSlice";
import { setAuth } from "../redux/features/authSlice";
import { useVerifyMutation } from "../redux/services/apiSlice";
import useVerify from "./use-verify";
import { toast } from 'react-toastify';

import Style from '../components/SideBar.module.css'


export default function useLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();
    const [id, SetId] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
           
          
    
    const {email , password } = formData;

    const onChange = (event) => {
       const {name , value} = event.target;

        setFormData({ ...formData,  [name] : value })
    }     
    //  useVerify(); 
    const onSubmit = (event) => {
       event.preventDefault();

   
       login({ email , password })
          .unwrap()
          .then(() => {   
       
            dispatch(setAuth())
          
            navigate('/dashboard/')
      
            window.location.reload()
        
         })
         .catch(() => {
           toast.error('پسورد یا ایمیل وارد شده معتبر نیست' )
         })
      
    };




    return {
        email,
        password,
        onChange,
        onSubmit,
        isLoading,
    } 
}


