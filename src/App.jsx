import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {Hero, Navbar , MusicPlayer, Songs , Songs1, Footer, SideBar2 , Underfooter} from "./components"
import { Aboutus, Search , SongDetails , Musics , Soalat , Khadamat  ,  Contactus , SearchPhone} from './pages'
import { Login , SignUp} from './auth'
import { Dashboard, Uploadphone  } from './dashboard';
import {Dashboardmanage , Profile , ProfileView} from './dashboard/index'
import Home from './Home'
import { Helmet } from 'react-helmet';
import { Activation } from './activation/[uid]/[token]';
import {ResetPass , NewPassword} from './auth/password-reset'
import PrivateRoute from './PrivateRoute';
import PrivateRoute1 from './PrivateRoute1';
import Redirect from './Redirect';
import NotFound from './NotFound';
import Test2 from './dashboard/Test2';
import { Setup } from './components/utils'

function App() {
  const { activeSong } = useSelector((state) => state.player);
  
  

  return (
    
     <div className="text-black  "> 
          
           <Helmet>
                  <title>ونگارد موزیک</title>
                  <meta name="og:description" content="ونگارد بستر تخصصی بررسی و دانلود آهنگ های جدید نسل جدید رپ فارسی است. طرفداران این نسل می توانند در این بستر از دنیای نسل جدید رپ فارسی لذت ببرند..."/>
                  <meta property="url" content="https://vanguardmusics.ir/"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <meta property="og:locale" content="fa_IR"/> 
                  <meta property="og:site_name" content="ونگارد | موسیقی نسل جدید رپ فارسی"/>
                  <meta property="og:type" content="website"/>
                  <meta property="og:title" content="ونگارد"/>
           </Helmet>
            <Routes>
           
              <Route path="/activation/:uid/:token/" element={<Activation/>}/>
              <Route path="/password-reset/:uid/:token/" element={<NewPassword/>}/>
              <Route path='/reset-password/' element={<ResetPass/>} />
              <Route path="/Profile/" element={
                                                   <PrivateRoute>
                                                     <Profile />
                                                     </PrivateRoute>
                                           
                                                  } />
              <Route path="/ProfileView/:artistname" element={<ProfileView/>} />
              <Route path="/dashboard/upload" element = {<PrivateRoute><Uploadphone /></PrivateRoute>} />
              <Route path="/dashboard/"  element={
                                                     <Dashboardmanage />
                                               
                                                  } />
              <Route path="/login/" element={ <PrivateRoute1><Login/></PrivateRoute1>} />
              <Route path = "/comment/:unique_id" element={<Test2/>} />
              <Route path="/register/" element={<PrivateRoute1><SignUp/></PrivateRoute1>} />
              <Route path="/search/:searchTerm" element={<Search />}/>
              <Route path='/search/' element={<SearchPhone/>} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route index element={<Home />} />
              <Route path='/aboutus' element={<Aboutus />} />
              <Route path='/songs' element={<Musics />} />
              <Route path='/soalat' element={<Soalat />} />
              <Route path='/khadamat' element={<Khadamat />} />
              <Route path="*" element={<NotFound/>} />
             </Routes>
          <div className='grid  '>
          {activeSong?.title && (
             <div className="fixed   md:p-3 h-15  md:h-28 md:bottom-0 bottom-8  left-0 right-0 md:grid animate-slideup bg-gradient-to-br  backdrop-blur-lg  z-20"> 
                 <MusicPlayer   />
               </div>
            )}
           
            <div className='fixed grid md:hidden bottom-0 left-0 right-0  '>
              <Underfooter/>
             </div>
          </div>
           <div className='h-30 md:hidden'></div>
       </div>
  )   //sticky change if have any problem
}

export default App



