'use client';

import { useLogin } from '../../hooks';
import { Form } from '../../components/forms';

export default function LoginForm() {
    const {
        email,
        password,
        onChange,
        onSubmit,
        isLoading,
        // isAuthenticated
    } = useLogin();
    const config = [
        {
          labelText: 'ورود',
          labelId: 'email',
          type: 'email',
          value: email,
          required: true,
        },
        {
          labelText: 'پسورد',
          labelId: 'password',
          type: 'password',
          value: password,
          /*link: {
            linkText: 'Forgot password?',
            linkUrl: '/password-reset?'
          },
          required: true, */
        }, 
      ];
    return (
        <div className='px-10 '>
       <Form 
          config={config} 
          isLoading={isLoading}
          btnText='ورود'
          onChange={onChange}
          onSubmit={onSubmit}
         />
        </div>
    )
}