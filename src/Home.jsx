import React ,{ useEffect, useRef }from 'react'
import { useGetVideoQuery } from './redux/services/shazamCore';
import { Navbar , Hero  , Songs , Songs1 , Footer , Songs2 , Songs3 , Hero1 , Underfooter} from './components';
import Hero2 from './dashboard/Hero';

const Home = () => {   
  // const videoRef = useRef(null);
  // const {data} = useGetVideoQuery()
  

  // useEffect(() => {
  //     if (videoRef.current) {
  //         videoRef.current.play();
  //     }
  // }, []);  
  return (
    <div className='h-screen bg-background' >
    <div className=' bg-gradient-to-b from-yellow-900 via-transparent to-transparent  '>
      <div className=''>
      <div  style={{ height : '60vh'}} >
    {/* {data?.map((song , i) => (
      <div  style={{ height : '60vh'}} >
     <video 
      ref={(el) => el && el.play()}
      
      muted 
      autoplay
      loop 
      src={song?.videos}   
      className='w-screen backdrop-blur-3'
      
      />
        </div>
      ))}   */}</div>
    </div>
    </div>
     <Navbar /> 
      
      

    
        <Songs />
       <Songs1 />
       <Songs3 />
       <Hero2 />
       <div className='bg-background py-10'></div>
       <Footer />
    </div>
  )
}

export default Home