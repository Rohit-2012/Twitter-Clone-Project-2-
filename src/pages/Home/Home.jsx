import React from "react";
import { Link } from "react-router-dom"
import LeftSection from "../../Section/LeftSection/LeftSection";
import Style from './Home.module.css'

export default function Signin(){
    return (
      <div className={Style.homeDiv}>
      <div className={Style.leftDiv}><LeftSection/></div>
      
    </div>


    )

}