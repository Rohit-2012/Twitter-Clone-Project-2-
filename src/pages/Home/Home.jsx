import React from "react";
import { Link } from "react-router-dom"
import LeftSection from "../../Section/LeftSection/LeftSection";
import Style from './Home.module.css'
import RightSection from '../../Section/RightSection/RightSection'
import MidSection from "../../Section/MidSection/MidSection";
export default function Home(){
  
    return (
      <div className={Style.homeDiv}>
      
      <div className={Style.leftDiv}><LeftSection/></div>
      <div className={Style.midDiv}><MidSection /></div>
      <div className={Style.rightDiv}><RightSection /></div>
    
    </div>


    )

}