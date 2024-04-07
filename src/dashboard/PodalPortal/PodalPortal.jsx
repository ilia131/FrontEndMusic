import React from "react";
import ReactDom from 'react-dom'

//INTERNAL IMPORT 
import Style from './Podal.module.css';
// import useVerify from "../../hooks/use-verify";


const PodalPortal = ({open , children , onClose}) => {
    if (!open) return null
    return ReactDom.createPortal (
        <>
        <div className={Style.PodalPortal}>
           <div className={Style.PodalPortal_box}>
            <div className={Style.PodalPortal_box1}>
            <div className={Style.PodalPortal_box_box}>
              <button onClick={onClose}>+</button> 
               </div>
                  {children} 
                </div>
            </div>
        </div>,
       </>,
        document.getElementById('portal')
    )
}

export default PodalPortal