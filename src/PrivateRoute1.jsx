import React from 'react';
import { useDispatch , useSelector} from "react-redux";
import Redirect from './Redirect';
import { Route, useNavigate } from 'react-router-dom';
import {setAuth} from './redux/features/authSlice'
import { logout as setLogout } from './redux/features/authSlice';

import Home from './Home';
const PrivateRoute1 = ({  children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { isAuthenticated } = useSelector((state) => state.auth);

 
    if (isAuthenticated) {
        
         return <Home/> ;
      
    } 

    return children;
   
};

export default PrivateRoute1;