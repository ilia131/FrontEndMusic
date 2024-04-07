import { Link } from 'react-router-dom';
import Style from './DetailsHeader.module.css'

const DetailsHeader = ({data}) => {
  
  
  return (

    <div className='relative w-full flex flex-col bg-songimage p-4 my-2 bg-hero-pattern'>
        <div className='w-full bg-gradient-to-1 from-transparent to-black ' />

        <div className='absoulte inset-0 flex items-center'>
         {data?.map((song , i ) =>(
                  <img 
                    alt="art"
                    src={song.get_image}
                    className='sm:w-60 w-28 sm:h-60 h-28 rounded-md
                     object-cover  shadow-xl shadow-black'
                 >
                
                 </img>
                ))}
   

      <div className='ml-5'>
        
        {data?.map((song , i ) =>(
            <div className={Style.details}>
                <h1 className='font-bold sm:text-3xl text-xl text-white my-2 mx-4'>{song.title}</h1>
                <p className={'font-bold sm:text-xl text-xl text-white  my-2 mx-4'}>{song.description}</p>
              </div>
             ))}
      </div>

     </div>

     <div className='w-full sm:h-22 h-10' />
  </div>
  );
}
export default DetailsHeader;
