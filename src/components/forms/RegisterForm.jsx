

import { useRegister } from "../../hooks"
import { Form } from '../../components/forms'

export default function RegisterForm() {
  const {
    first_name,
    artistname,
    email,
    password,
    re_password,
    onChange,
    onSubmit,
    isLoading,
  } = useRegister();

  const config = [
    {
      labelText: 'نام',
      labelId: 'first_name',
      type: 'text',
      value: first_name,
      required: true,
    },
    {
      labelText: 'لقب هنری',
      labelId: 'artistname',
      type: 'text',
      value: artistname,
      required: true,
    },
    {
      labelText: 'ایمیل',
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
      required: true,
    },
    {
      labelText: 'تایید پسورد',
      labelId: 're_password',
      type: 'password',
      value: re_password,
      required: true,
    }
  ];

    return (
      <div className='text-white'>
      <Form 
         config={config}
         isLoading={isLoading}
         btnText='ثبت نام'
         onChange={onChange}
         onSubmit={onSubmit}   
      />
      </div>
    );
}