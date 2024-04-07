import React from 'react';
import { useSelector} from "react-redux";
import Redirect from './Redirect';

const PrivateRoute = ({  children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

 
    if (!isAuthenticated) {

        

         return <Redirect/>;
       
    } 

    return children;
   
};

export default PrivateRoute;