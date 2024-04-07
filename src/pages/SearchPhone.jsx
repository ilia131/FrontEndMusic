import React , {useState}from 'react'
import Style from '../components/Navbar.module.css'
import { BsSearch } from 'react-icons/bs'
import { useNavigate , Link } from "react-router-dom";

const SearchPhone = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
     
        setTimeout(() => {
           navigate(`/search/${searchTerm}`);
           }, 500)
       }
     
  return (
    <div className='h-screen bg-background px-24 py-10'>
             <form onSubmit={handleSubmit}>
               <div className='flex gap-1'>
                 <div className={Style.text1}>
                      <input placeholder='نام ارتیست , نام موزیک'
                       name="search-field"
                       autoComplete="off"
                       id="search-field"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       type="search"
                       className="text-white text-right bg-transparent h-4 border-none  py-2 outline-none"
                        />
                   </div>
                       <BsSearch className={Style.search_icon} />
              </div>
         </form>
    </div>
  )
}

export default SearchPhone