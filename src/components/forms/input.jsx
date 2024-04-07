import { ChangeEvent } from "react";
import { Link }  from "react-router-dom";



export default function Input({ 
        labelId, 
        type, 
        onChange, 
        value ,
        children,
        link,
        labelText,
        required = false,
 }) {
    return (
    <div>
        <div>
        <label htmlFor={labelId} className="block text-sm font-medium leading-6 text-right text-white">
          {children}
        </label>
         {link && (
                <div className='text-sm'>
                   <Link   className='font-semibold text-green-400 hover:text-green-200' href={link.linkUrl}>
                    {link.linkText}
                   </Link>
                </div>
         )}
        </div>
  
       <div className="mt-2">
         <input
           id={labelId}
           className="  w-full  border-0 py-1.5 text-white   
           outline-none border-none text-right placeholder:text-xs bg-black rounded-md placeholder:text-gray-400 placeholder:pr-2"
           name={labelId}
           type={type}
           onChange={onChange}
           placeholder={labelText}
           value={value}
           required={required}
         />
          
        </div>
     </div>
    )
}