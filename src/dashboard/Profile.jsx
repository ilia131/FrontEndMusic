import React , {useState} from 'react'
import { useRetrieveUserQuery , usePatchUserMutation} from '../redux/services/apiSlice'
import Style from './PortalBox/Portalbox.module.css'
import { useDropzone } from 'react-dropzone';
import { FaPlus } from "react-icons/fa";
import { MdImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Profile = () => {
    const {data , isError} = useRetrieveUserQuery()
    const [patchUser] = usePatchUserMutation()
//USE STATE
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [artistname, setArtistname] = useState('')
    const [profile_pic, setProfilepic] = useState(null)
    const [background, setBackground] = useState(null)

//USE DROPZONE
   const { getRootProps: getRootPropsImage, getInputProps: getInputPropsImage } = useDropzone({ type:'file' , name:'profile_pic' });
   const { getRootProps: getRootPropsBack, getInputProps: getInputPropsBack} = useDropzone({ type:'file' , name:'background' });
//USE NAVGATE
const navigate = useNavigate();

   const handleImageChange = (e) => {
      setProfilepic(e.target.files[0]);
  
    };
    const handleBackChange = (e) => {
        setBackground(e.target.files[0]);
    
    };
  

    const handleUpload = () => {
        const formData = new FormData();
       
        const fields = {
         first_name,
         last_name,
         profile_pic,
         background,
         artistname
     };
 
     let fieldFilled = false;
 
     Object.entries(fields).forEach(([key, value]) => {
         if (value) {
             formData.append(key, value);
             fieldFilled = true;
         }
     });
 
     if (!fieldFilled) {
         toast.error('لطفا حداقل یکی از فیلدها را پر کنید');
         return;
     }



        setTimeout(() => {
         
           patchUser(formData)
           .unwrap()
           .then(() => {  
             navigate('/dashboard/')
             window.location.reload();
           })
           .catch(() => {
             toast.error('لقب هنری قبلن رزرو شده است')
           })
          }, 300);
           
     };
  return (
    <div className='h-[1200px]  bg-gradient-to-b from-yellow-900/80 via-background to-background '>
      <div className='grid  md:mx-10'>
        <div className='grid align-middle text-white text-center pt-10 justify-center  gap-10'>
            <p>{data?.email}</p>
            <div className='flex text-center justify-center max-md:gap-4 md:gap-3'>
               <p>{data?.first_name}</p>   <div>|</div>  <p>{data?.last_name}</p>
             
            </div>
            <div className='grid gap-10'>
                <div className='md:text-right text-green-400  md:flex md:gap-2  md:ml-12  max-md:grid '>
            <div className='pt-3 md:hidden text-center'>
                   <label htmlFor="Artist" className={Style.text}>نام جدید </label>
                   </div>
                   <input 
                    name='first_name'
                    type='last_name'
                    placeholder={data?.first_name}
                    className={Style.text1}
                    value={first_name}
                    onChange={(e)=> setFirstName(e.target.value)}
                   />  
                    
                   <div className='pt-3 max-md:hidden text-center'>
                   <label htmlFor="Artist" className={Style.text}>نام جدید </label>
                   </div>
                </div>
                 <div className='text-right text-green-400  md:flex md:gap-2  md:ml-8  max-md:grid '>
                 <div className='pt-3 md:hidden text-center'>
                   <label htmlFor="Artist" className={Style.text}> فامیلی جدید </label>
                   </div>
                
                    <input
                       name='last_name'
                       type='last_name'
                       value={last_name}
                       className={Style.text1}
                       placeholder={data?.last_name}
                       onChange={(e)=> setLastName(e.target.value)}
                     
                    /> 
                    <div className='pt-3 max-md:hidden '>
                    <label htmlFor="Artist" className={Style.text}>فامیلی جدید</label>
                    </div>
                  </div>
                  <div className='text-right text-green-400 md:flex gap-2 md:ml-10 max-md:grid '>
                  <div className='pt-3 md:hidden text-center'>
                   <label htmlFor="Artist" className={Style.text}> لقب هنری</label>
                   </div>
                   <div>
                   <input
                      name='artistname'
                      type='artistname'
                      value={artistname}
                      className={Style.text1}
                      placeholder={`/ProfileView/${data?.artistname}`}
                      onChange={(e)=> setArtistname(e.target.value)}
                      
                   /> 
                   </div>
                   <div className='pt-3 max-md:hidden text-center'>
                     <label htmlFor="Artist" className={Style.text}>لقب هنری</label>
                   </div>
                 </div>

                  <div className='grid gap-3'>
                           <div className='text-right text-green-400 max-md:text-center'>
                              <label htmlFor="Artist" className={Style.text}>عکس پروفایل جدید</label>
                           </div>
                      <div  style={{ border: '1px dashed black', padding: '20px'}} className='grid justify-center text-right max-md:w-[17rem]
                        max-md:ml-[2rem] text-green-400'>
                            <input type='file' accept='image/*'onChange={handleImageChange}   />
                                <div className='w-[100px] h-[100px] flex items-center justify-center  text-center text-[20px] '>
                                     {profile_pic?  <MdImage />    : <FaPlus  /> }
                          </div>
                        </div>
                     </div>





                     <div className='grid gap-3'>
                           <div className='text-right text-green-400 max-md:text-center'>
                              <label htmlFor="Artist" className={Style.text}>عکس بک گراند</label>
                           </div>
                      <div style={{ border: '1px dashed black', padding: '20px'}} className='grid justify-center 
                         max-md:w-[17rem]
                          text-right
                           text-green-400 max-md:ml-[2rem]'
                           
                           >
                            <input   accept='image/*'  type='file' onChange={handleBackChange}   />
                                <div className='w-[100px] h-[100px] flex items-center justify-center  text-center text-[20px]'>
                                     {background?  <MdImage />    : <FaPlus  /> }
                          </div>
                        </div>
                     </div>





                  <div className={Style.text}>
                   <div className=' flex justify-center align-middle'>
                   <div className='text-center
                       bg-green-400  
                        flex items-center justify-center
                        mt-2 rounded-md py-2
                        md:w-[20rem]
                        max-md:w-[10rem]
                        hover:bg-green-500 cursor-pointer'
                        onClick={handleUpload}>
                         تایید
                   </div></div>
                    
                  </div>
            </div>
            </div>
         </div>
    </div>
  )
}

export default Profile