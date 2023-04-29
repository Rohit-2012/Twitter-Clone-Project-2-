// import React from 'react'

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import style from './MidSection.module.css'
// import {user} from "../../Utils/user"
// import { profile } from '../../Utils/user';

// function MidSection() {
    

//       return(
//         <div  className={style.MainBox} >
//             {user.map((users,index) => {
//                 return(
//                     <>
//                     <span className={style.MainContainer}>
//                        {users.name}
//                         {users.handlerName}
//                         </span>
                       
//                          {profile.map((profiles,index)  =>{
//                             return(
                              
                               
//                                     <span>{profiles.profile}</span>
                                

//                             )
//                          }) }

//                     {/* <div className={style.maindiv1} key={index}> */}
                       
            
                         
                        
                    
                    
//                     </>
//                 )
//             })}
        
//         </div>
//       )
// }

// export default MidSection;

import React from 'react'
import MidNav from '../../Components/MidNav/MidNav'

import style from './MidSection.module.css'
function MidSection() {
    const images = new Array(1000).fill(0).map((x, index) => {
        return `https://picsum.photos/1000/500?q=${index}`;
      });
    
      console.log(images);
  return (
    <div className={style.bigDiv}>
      
      <MidNav/>
      {images.map((image, index) => {
        return <img key={index} src={image} style={{ width: "720px",height:"300px" }} />;})}
     
    </div>
  )
}

export default MidSection