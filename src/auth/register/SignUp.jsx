import { Link } from 'react-router-dom';

import { RegisterForm } from '../../components/forms';

import Style from './register.module.css'



export default function Page() {
   

    return (
        <div className='grid text-center text-white p-10 justify-center 
        bg-gradient-to-r from-green-900  to-purple-900 py-20'>
        <div className={Style.login_box}>
        
          <h2 className={Style.register_box_box}>
            اینجا ثبت نام کن
          </h2>
      

         <RegisterForm />
          <p className="mt-10 text-center text-sm text-gray-500">
            اکانت داری؟{' '}
            <Link to='/login' className="font-semibold leading-6 text-green-400 hover:text-green-500">
                اینجا وارد شو
            </Link>
          </p>
        </div>
       </div>
    )
}