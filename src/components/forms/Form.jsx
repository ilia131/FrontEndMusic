
import { ChangeEvent , FormEvent } from "react";
import { Input } from '../../components/forms';
import { Spinner } from '../../components/common'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Form({ config , isLoading , btnText ,onChange , onSubmit}) {

    
    return (
        <form className='space-y-8 ' onSubmit={onSubmit}>
            {config.map(input => (
                 <Input
                     key={input.labelId}
                     labelId={input.labelId}
                     type={input.type}
                     onChange={onChange}
                     value={input.value}
                     required={input.required}
                     link={input.link}
                     labelText={input.labelText}
                >
                    {input.labelText}
                </Input>
            ))}
           <div>
             <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold"
                disabled={isLoading}
            >
                {isLoading ? <Spinner sm /> : `${btnText}`}
             </button>
             <ToastContainer />
          </div>
        </form>
    )
}