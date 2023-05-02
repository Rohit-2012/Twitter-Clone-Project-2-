import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { constSelector, useRecoilValue, useSetRecoilState } from "recoil"
import { isLoginAtom, usersAtom} from "../../Atom/Atom";
import { Feeds } from "../../components/Feeds";
import { TweetForm } from "../../components/TweetForm";

import React from "react";
import LeftSection from "../../Section/LeftSection/LeftSection";
import Style from './Home.module.css'
import RightSection from '../../Section/RightSection/RightSection'
// import MidSection from "../../Section/MidSection/MidSection";

export default function Home() {

  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const users = useRecoilValue(usersAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/signIn");
    }
  }, []);
console.log(isUserLoggedIn)
  return (
    <div className={Style.homeDiv}>
      
        <div className={Style.leftDiv}><LeftSection/></div>

          <div className={Style.midDiv}>
          <h2>Home</h2>
            <TweetForm />
            <hr />
            <Feeds />
          </div>
          <div className={Style.rightDiv}>
          <RightSection />
          </div>

      {/* <div className={Style.homeDiv}>
      
      <div className={Style.leftDiv}><LeftSection/></div>
      <div className={Style.midDiv}><MidSection /></div>
      <div className={Style.rightDiv}><RightSection /></div>
    
    </div> */}

    </div>
  );
}
