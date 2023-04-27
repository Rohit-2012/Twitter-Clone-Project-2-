import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import SigninCss from "./Signin.module.css";
import { Link } from "react-router-dom";
import { showHome,userData } from "../LocalStorage/LocalStorage";
import Home from "../pages/Home/Home";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleButton from 'react-google-button'
import AppleLogin from 'react-apple-login';


function Signin() {
  const atomvalue = useRecoilValue(userData);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [homeVis, setHomeVis] = useRecoilState(showHome);
   const [test, setTest] = useState("");

  function CheckDataFromLocal() {
    const dataEnteredIsValid = atomvalue.find(
      (x) => x.email === enteredEmail && x.password === enteredPass
    );
    if (dataEnteredIsValid) {
      setHomeVis(!homeVis);
      setTest(dataEnteredIsValid);
      alert("login sucessful");
    } else {
      alert("Kindly check your email and password ");
    }
  }

  return homeVis ? (
    <Home />
  ) : (
    <div className={SigninCss.mainDiv}>
      <div className={SigninCss.Div}>
        <div className={SigninCss.Element1}>
          <TwitterIcon
        sx={{ color:"white",size:"bigger" }}
        />
        </div>
       <div className={SigninCss.Element2}><h1>Sign in to Twitter</h1></div> 
      
       <div className={SigninCss.Button1}>
       <Link to={"https://www.google.com/"}>
        <GoogleButton 
         sx={{ color:"red",size:"bigger",backgroundColor:'yellow' }} />
        </Link>
       </div>
       <div className={SigninCss.Button2}>
           <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
           <hr
            style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
              height: '3px',
              
            }}
           />
       </div>
       
       
        
        <TextField
          sx={{ width: "25ch", backgroundColor: "rgb(122, 128, 125)" }}
          id="outlined-basic"
          label="Enter your Email"
          variant="filled"
          onChange={(e) => {
            setEnteredEmail(e.target.value);
          }}
        />
        <TextField
          type="password"
          sx={{ width: "25ch", backgroundColor: "rgb(122, 128, 125)" }}
          id="outlined-basic2"
          label="Enter your password"
          variant="filled"
          onChange={(e) => {
            setEnteredPass(e.target.value);
          }}
        />

        {homeVis ? (
          ""
        ) : (
          <Button
            color="success"
            variant="contained"
            sx={{
              width: "10ch",

              borderRadius: 6,
              borderBottomRightRadius: 0,
            }}
            onClick={CheckDataFromLocal}
          >
            Login
          </Button>
        )}
        <br/>
        <div className={SigninCss.Element3}>
<p >Don't have an account ?</p>
        <Link to={"/Signup"}>
          <Button
            onClick={() => {
              alert("Enter Details to Become a part of our twitter family");
            }}
            
            color="success"
            
            
          >
             Sign up
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
