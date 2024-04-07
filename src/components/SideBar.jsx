import React, {useState} from 'react';
import {GrClose} from 'react-icons/gr';
import { Link , useNavigate} from 'react-router-dom';

import { BsSearch , BsInstagram } from 'react-icons/bs'

//INTERNAL IMPORT
import Style from './SideBar.module.css';



const SideBar = () => {
    const [openDiscover, setOpenDiscover] =  useState(false);
    const [openHelp, setOpenHelp] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault()
   
   
      navigate(`/search/${searchTerm}`);
   
     }
  
    
  
    return (
        <div className='bg-background   max-md:h-screen'>    
            <div className={Style.sideBar_menu}>
                <div className='grid gap-5'>
                <form onSubmit={handleSubmit}>
                      <div className='bg-background border-none'>
                          <div className='flex gap-3'> 
                          <BsSearch className='text-white my-1 ' /> 
                             <input placeholder='نام ارتیست , نام موزیک'
                                    name="search-field"
                                    autoComplete="off"
                                    id="search-field"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    type="search"
                                    className="text-white bg-transparent border-none outline-none"
                                    />
                            </div>
                          
                        </div>
                   </form>
                       <div className='grid py-4 gap-6 justify-center text-right pr-5'>
                             <Link to='/songs' className='text-white 
                                  text-md hover:text-green-400 rounded-md '>همه موزیک ها</Link>
                               <Link to='/' className='text-white 
                                  text-md hover:text-green-400 rounded-md'>صفحه اصلی </Link>
                               <Link to='/aboutus' className='text-white 
                                  text-md hover:text-green-400 rounded-md'>درباره ما</Link>
                            </div>
                       </div>
                <div>
                
                </div>
               
            </div>
            <div className='bg-green-400 h-[100px] text-center font-bold text-md pr-10 '>
                       <p className={Style.sideBar_menun}>با ما بهترین باشین</p>
               </div>
 
          <div className='text-white p-2 text-center justify-center flex text-x gap-4 py-5'>
             <Link className='pt-1 ' to='https://instagram.com/vanguardmusics'>
                  <BsInstagram />
             </Link> 
             <p className='font-bold'>اینستاگرام</p>
          </div>
        </div>
    )
    
};

export default SideBar;