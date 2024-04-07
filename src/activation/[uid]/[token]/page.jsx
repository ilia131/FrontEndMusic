import React, {useEffect} from 'react'
import { useActivationMutation } from '../../../redux/services/apiSlice'
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Style from '../../../components/Navbar.module.css'
const Activation = () => {
    const { uid, token } = useParams();
    const [activation] = useActivationMutation()
    const navigate = useNavigate();
    useEffect(() => {

        activation({uid, token})
          .unwrap()
          .then(()=> {
                alert('Account activated')
          })
          .catch(() => {
                toast.error('Activation failed')
          })
         
    },[activation, uid, token, navigate]);
  return (
    <div className='h-screen bg-gradient-to-r text-center from-green-900 p-[10rem] font-bold to-purple-900 grid justify-center items-center align-middle'>
        <p className={Style.text1}>اکانت شما فعال شد</p>
        <p className={Style.text1}> vanguardmusic.ir/ProfileView/لینک ارتیستیه شما  : /لقب هنری   </p>
        <p className={Style.text1}>برای گذاشتن موزیک به داشبورد مراجعه کنین </p>
        <div className={Style.text1}>
        <Link className='bg-background p-3 text-white'to={'/'}>صفحه اصلی</Link>
        </div>
    </div>
  )
}

export default Activation