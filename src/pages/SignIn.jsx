import React from 'react';
import style from "./SignIn.module.css"
import { useState } from 'react';
import {FaGooglePlusSquare,FaApple} from "react-icons/fa"
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import {FaTwitter} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";





function SignIn() {
  const[details, setDetails] = useState('')
  const[password, setPassword] = useState('')
  const navigate=useNavigate()

  const registerData = JSON.parse(localStorage.getItem('UserDetail'))

  function handleSubmit(e){
    e.preventDefault();
    if(details==registerData.email && password == registerData.password){
       navigate("/")
    }
  }
  return (
    <div className={style.main}>
    <form >
    <div className= {style.main1}>
    <FaTwitter sx={{}}/>
     <h1>Sign in to Twitter</h1>
     
     <Button variant="outlined" id={style.button1}><FaGooglePlusSquare id={style.icon1}/> Sign in with Google</Button><br/>
     <Button variant="outlined" id={style.button2}><FaApple/> Sign in with Apple</Button>
     </div>
     {/* <hr/> */}
     {/* <span style={{marginLeft:'0.5rem',marginTop:'-1'}}>or</span><hr style={{width:'45%',textAlign:'left',marginLeft:'0.5rem',height:'0rem'}}></hr> */}
     <div className= {style.main2}> 
     <TextField
          required
          className={style.textField1}
          id="outlined-password-input"
          label="Phone,email,address or username"
          text="Phone,name or Email"
          autoComplete="current-password"
          onChange={(e)=>setDetails(e.target.value)}
          sx={{marginBottom:"2rem"}}
        /><br/>
         <TextField
           required
            className={style.textField2}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
          sx={{marginBottom:"2rem"}}
        /><br/>
        <Button variant="contained"  id={style.button3}>Submit</Button>
        <h3>Forgot password?</h3>
        <span className={style.signUpBtn}>
            Don't have an account  <Link to="/SignUp">Sign up</Link>
          </span>
        </div>
    </form>
    </div>
  );
}

export default SignIn;
