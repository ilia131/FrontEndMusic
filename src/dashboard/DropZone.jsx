import React from 'react'
import { useDropzone } from 'react-dropzone';
import { FaPlus } from "react-icons/fa";
import Style from './PortalBox/Portalbox.module.css'

const DropZone1 = () => {
    const { getRootProps, getInputProps } = useDropzone({ accept: 'image/*'  ,  type:'file' , alt:'cover Image', name:'image' });



  return (
    <div className='grid gap-1'>
            <div className='text-right text-green-400'>
             <label htmlFor="Artist" className={Style.text}>کاور موزیک</label>
              </div>
               <div {...getRootProps()} style={{ border: '1px dashed black', padding: '20px'}} className='text-right text-green-400'>
                   <input {...getInputProps()} onChange={handleImageChange} />
                      <div className='w-[200px] h-[200px] flex items-center justify-center text-[50px]'>
                         <FaPlus />
                      </div>
                    </div>
             </div>
  )
}

export default DropZone1