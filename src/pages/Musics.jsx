import {  useSelector } from 'react-redux';
import { useState } from 'react';
import {  SongCard } from '../components'
import { genres } from '../assets/constants'
import {Footer, Navbar} from '../components';


import { useGetTop2Query } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';
import Style from './Aboutus.module.css'




const Musics = () => {

    const { activeSong , isPlaying} = useSelector((state) => state.player);
    const { data } = useGetTop2Query();
    const [ currentPage , setCurrentPage] = useState(1)
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data?.slice(firstIndex, lastIndex);
    const npage = Math.ceil( data?.length / recordsPerPage);
    const numbers = [];
      for (let i = 1; i <= npage; i++) {
         numbers.push(i);
     }

    return (
      <div >
      <Navbar />
        <div className='flex flex-col  bg-gradient-to-b from-yellow-900 via-background to-background py-20 align-right  '>
         
            <div className='w-full flex justify-between items-center py-2 
              sm:flex-row flex-col mt-4 mb-10 text-center'>
              
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8 px-14'>
               {records?.map((song , i) => (
                  <SongCard 
                      key={song.key}
                      song={song}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      data={data}
                      i={i}
                />
              ))}
            </div>
            <div className='py-10'></div>
            <div className='py-10'></div>
            <nav className={Style.pages}>
              <ul className='flex gap-4 justify-center py-10 text-xl text-white max-md:flex'>
                  <li className='list-style-none flex'>
                     <a href='#' className='bg-gradient-to-r  from-green-900  to-purple-900 rounded-sm p-3' onClick={prePage}>قبلی</a>
                  </li>
                  {numbers.length > 3 ? (
                <>
                {numbers.slice(currentPage - 1, currentPage + 2).map((n, i) => (
                    <li key={n} className={`p-3 rounded-sm  ${currentPage === n ? 'active' : ''}`}>
                       <a href='#' onClick={() => changeCpage(n)}>{n}</a>
                   </li>
            ))}
            {currentPage < numbers.length - 2 && (
             <>
             <li className='p-3'>...</li>
               <li className={` p-3 rounded-sm  ${currentPage === numbers.length - 1 ? 'active' : ''}`}>
                  <a href='#' onClick={() => changeCpage(numbers.length - 1)}>{numbers.length}</a>
             </li>
             </>
             )}
            </>
             ) : (
                numbers.slice(0 , 3).map((n, i) => (
                    <li key={n} className={` p-3  rounded-sm ${currentPage === n ? 'active' : ''}`}>
                         <a href='#' onClick={() => changeCpage(n)}>{n}</a>
                    </li>
                    ))
                 )}
                   <li className='list-style-none flex'>
                     <a href='#' className='bg-gradient-to-r  from-green-900  to-purple-900 rounded-sm p-3' onClick={nextPage}>بعدی</a>
                  </li>
              </ul>
            </nav>
          
        </div>
              <Footer />
      </div>
    );
    function prePage() {
      setTimeout(() => {
      if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
      }, 300)
    }


    function changeCpage(id) {
      setTimeout(() => {
           setCurrentPage(id)
      }, 300)
    }
    


    function nextPage() {
      setTimeout(() => {
        if(currentPage !== npage) {
          setCurrentPage(currentPage + 1)
        }
      }, 300); // تاخیر ۱ ثانیه (۱۰۰۰ میلی‌ثانیه)
    }
};

export default Musics;
