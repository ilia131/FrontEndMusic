import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
const Like = ({handlelike , handleDeleteLike , totalViewsCount1 , totalViewsCount2 , isLiked , openlike}) => {
  return (
    <div>  
        { isLiked? (
        openlike ? (
      <div className='text-white p-1 grid justify-center text-center gap-1'>
       <FcLikePlaceholder onClick={handlelike}  />
     <p className='text-xs'>{ totalViewsCount2 }</p>
   </div>
     ) : (
  <div className='text-white p-1 grid justify-center text-center gap-1'>
   
     
     <FcLike onClick={handleDeleteLike} />
        <p className='text-xs'>{totalViewsCount1}</p> 
   </div>
       )
    ) : (!openlike ? (
     <div className='text-white p-1 grid justify-center text-center gap-1'>
         
          <FcLikePlaceholder onClick={handlelike} />
         <p className='text-xs'>{totalViewsCount1 }</p> 
      </div>
    ) : (
      <div className='text-white p-1 grid justify-center text-center gap-1'>
      <FcLike onClick={handleDeleteLike} />
        <p className='text-xs'>{totalViewsCount2}</p> 
        </div>))}
        </div>
  )
}

export default Like