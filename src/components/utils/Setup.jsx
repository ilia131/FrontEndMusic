import { useEffect , useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useVerify  } from "../../hooks";
import { useSelector , useDispatch,} from "react-redux";
import { logout as setLogout } from '../../redux/features/authSlice';

export default function Setup() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
   
    useVerify()
   
        // useLogout()
    
    
    return <ToastContainer/>;  
    
}