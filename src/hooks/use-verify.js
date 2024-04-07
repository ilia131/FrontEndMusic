import { useEffect } from "react";
import { setAuth  , finishInitialLoad } from "../redux/features/authSlice";
import { logout as setLogout } from '../redux/features/authSlice';

import { useVerifyMutation } from "../redux/services/apiSlice";
import { useDispatch  ,useSelector } from "react-redux";




export default function useVerify() {
   const { isAuthenticated } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [verify] = useVerifyMutation()
     
    useEffect(() => {
        verify(undefined)
         .unwrap()
         .then(() => {
          
            dispatch(setAuth())
       
         })  
         .finally(() => {
            dispatch(finishInitialLoad())
         })  
    }, []);

}