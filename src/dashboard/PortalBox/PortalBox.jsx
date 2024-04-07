import React , {useState} from 'react'
import {  usePostMutation } from '../../redux/services/apiSlice';
import Style from './Portalbox.module.css'
import { useNavigate } from "react-router-dom";

import { useDropzone } from 'react-dropzone';
import { FaPlus } from "react-icons/fa";
import { Spinner } from '../../components/common'
import { MdLibraryMusic } from "react-icons/md";
import { MdImage } from "react-icons/md";
import {toast} from 'react-toastify'
const PortalBox = ({onClose}) => {
  //FORMDATA
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [track, setTrack] = useState(null)
  const [image, setImage] = useState(null)
  const [post , {isLoading}] = usePostMutation()
  const navigate = useNavigate();

  
  const handleFileChange = (e) => {
    setTrack(e.target.files[0]);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('title', title)
    formData.append('image', image)
    formData.append('description' , description)
    formData.append('track', track);
    
    setTimeout(() => {
       post(formData)
       .unwrap()
       .then(() => {
         window.location.reload();
      })
      .catch (() => {
        toast.error('فایل ها به درستی جایگذاری نشده اند')
      })
      }, 100);
       
 };





 const handleImageChange = (e) => {
  setImage(e.target.files[0]);

};

  return (
 
    <div className='grid gap-4 '>
        <div className='flex gap-3'>
          <div className='grid gap-1'>
            <div className='text-right text-green-400'>
             <label htmlFor="Artist" className={Style.text}>کاور موزیک</label>
              </div>
               <div  style={{ border: '1px dashed black', padding: '5px'}} className='text-right text-green-400 '>
                   <input type='file' onChange={handleImageChange} 
                  style={{
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
                   
                   accept='image/*' className='flex text-sm'/>
                      <div className='w-[200px] h-[200px] flex items-center justify-center text-[50px]'>
                      {image?  <MdImage />    : <FaPlus  /> }
                      </div>
                      
                    </div>
                 </div>
          
          <div className='grid gap-10'>
                <div className='text-right grid text-green-400'>
                   <label htmlFor="Artist" className={Style.text}>نام آرتیست</label>
                   <input 
                    name='title'
                    type='title'
                    placeholder='نام آرتیست'
                    className={Style.text1}
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                   />
                </div>
                 <div className='text-right grid text-green-400  '>
                    <label htmlFor="Artist" className={Style.text}>نام موزیک<div></div></label>
                    <textarea
                       name='description'
                       type='description'
                       value={description}
                       className={Style.text1}
                       placeholder='نام موزیک'
                       onChange={(e)=> setDescription(e.target.value)}
                    />
                  </div>
            </div>
         
           </div>


        <div>
           
        <div className='grid gap-1'>
                 <div className='text-right text-green-400 '>
                      <label htmlFor="Artist" className={Style.text}> موزیک</label>
                        </div>
                         <div  style={{ border: '1px dashed black', padding: '20px' }}
                          className='grid w-[100%] items-center justify-center text-green-400'
                          >
                          <input 
                           onChange={handleFileChange} 
                            type='file'  
                            className='text-green-400 truncate'
                            alt='cover Music'
                            accept='audio/*'
                            style={{ width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                          />
                        <div className='w-[200px] h-[10px] flex items-center justify-center text-[20px] '>
                          </div>
                          
                    </div>
                
                 </div>    
                 <div className={Style.text1}>
                     {isLoading ? <div className='text-center
                    bg-green-400  
                    flex items-center justify-center
                    mt-2 rounded-md py-3
                    hover:bg-green-500 cursor-pointer'> <Spinner  sm /></div> :  <div className='text-center
                    bg-green-400  
                    flex items-center justify-center
                    mt-2 rounded-md py-3
                    hover:bg-green-500 cursor-pointer' onClick={handleUpload}>  آپلود </div>}
                  
               </div>
         </div>
     </div>

  )
}

export default PortalBox