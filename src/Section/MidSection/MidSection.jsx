

import React from 'react'
import MidNav from '../../Components/MidNav/MidNav'
import style from './MidSection.module.css'
import HomeScrol from "../HomeScrol/HomeScrol"
function MidSection() {
    const images = new Array(1000).fill(0).map((x, index) => {
        return `https://picsum.photos/1000/500?q=${index}`;
      });
    
      console.log(images);
  return (
    <div className={style.bigDiv}>
      
      <MidNav/>
      <HomeScrol/>
      {images.map((image, index) => {
        return <img key={index} src={image} style={{ width: "720px",height:"300px" }} />;})}
     
    </div>
  )
}

export default MidSection