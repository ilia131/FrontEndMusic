import { LoginForm } from '../../components/forms';
import Style from './login.module.css'
import { Link } from 'react-router-dom';



export default function Page() {
   

    return (
      <div className='h-[70rem] max-md:h-[40rem] bg-gradient-to-r  from-green-900  to-purple-900 '>
       <div className={Style.login}>
        <div className='grid text-center text-white p-10 justify-center'>
          <div className={Style.login_box}>
             <h2 className={Style.login_box_h2}>
                صفحه  ورود
             </h2>
      
         
          <LoginForm />
          <p className="mt-10 text-center text-sm text-gray-500">
            اکانت نداری؟{' '}
            <Link to="/register" className="font-semibold leading-6 text-green-400 hover:text-green-600">
                اینجا وارد شو
            </Link>
          </p>  
        
            <Link to="/reset-password" className="font-semibold text-xs leading-6 text-green-400 hover:text-indigo-500">
              فراموشی رمز عبور
            </Link>
           </div>
        </div>
    
      </div>
     </div>
    )
}