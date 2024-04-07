import { useState , ChangeEvent , FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/services/apiSlice";
import { toast } from 'react-toastify';



export default function useRegister() {
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        first_name: '',
        artistname: '',
        email: '',
        password: '',
        re_password: '',
    });

    const {first_name, artistname, email , password , re_password} = formData;

    const onChange = (event) => {
       const {name , value} = event.target;

        setFormData({ ...formData,  [name] : value })
    }

    const onSubmit = (event) => {
       event.preventDefault();
       const hasNonNumeric = /\D/.test(password)
       const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
       const isNotEmpty = first_name.trim() == '';
       const isPasswordValid = password.length >= 8;
       if (!isPasswordValid) {
        toast.error('رمز عبور باید حداقل 8 کاراکتر باشد');
    } else if (!hasNonNumeric) {
      toast.error('رمز عبور باید شامل حروف باشد');
     }  else if (password !== re_password) {
        toast.error('رمز عبور و تکرار آن مطابقت ندارند');
    } else if (!isEmailValid) {
      toast.error('فرمت ایمیل وارد شده صحیح نیست');
     } 
       else {
        register({ first_name, artistname, email, password, re_password })
            .unwrap()
            .then(() => {
                toast.success('ایمیل خود را تایید کنید');
                
            })
            .catch(() => {
                toast.error('ایمیل یا نام هنری رزرو شده است')
            })
    }
    }

    return {
        first_name,
        artistname,
        email,
        password,
        re_password,
        onChange,
        onSubmit,
        isLoading,
    }
}