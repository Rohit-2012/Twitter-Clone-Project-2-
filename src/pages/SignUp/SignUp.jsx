import { TextField } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import CustomButton from "../../components/CustomButton/CustomButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Atom/Atom";
import {yearArray, monthArray, dateArray} from '../../utils/constants'
import style from "./SignUp.module.css";
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 670,
  height: 670,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
  outline: 0
};

const SignUp = ()=>{
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [createAC, setCreateAC] = useState(false)

    const setLoginStatus = useSetRecoilState(isLoginAtom);
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [date , setDate] = useState('')
    const [month , setMonth] = useState('')
    const [year , setYear] = useState('')
    const [toggleEmail , setToggleEmail] = useState(false)
    const [info, setInfo] = useState([])

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [error, setError] = useState(false)
   
    const handleNext= (e)=>{
      e.preventDefault()

      const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

      if (!regEmail.test(email)) {
        setEmailError(true);
    }else if (!regPassword.test(password)) {
      setPasswordError(true)
  }
    else{
      setEmailError(false)
      setPasswordError(false)

      if (name.trim() === '' || email.trim() === '' || password.trim() === '' || month==='' || date==='' || year==='') {
        setError(true)
        if(error===true){
        alert('All fields are Mandatory')
        }
    }else{
      setError(false)
      alert('successfully registered')
      const data = { name: name, email: email,phone: phone,password:password, DOB: `${ month+ '/' + date+ '/' + year}`}
      setInfo([...info, data])
      localStorage.setItem("UserDetail", JSON.stringify([...info, data]))
      setName("")
      setEmail("")
      setPhone('')
      setPassword('')
      setMonth("")
      setDate("")
      setYear("")
      setLoginStatus(true);
      navigate("/");
    }

    }
    }

    const handleToggle = ()=>{
      setToggleEmail(!toggleEmail)
    }

    const handleCreate = ()=>{
      setCreateAC(!createAC)
    }
return(
  <>
   <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
       {createAC?
       (<form onSubmit={handleNext} className={style.formBox}>
            <h1 className={style.heading}>Create your account</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{background: 'white', width:'35rem'}} value={name} onChange={(e)=>setName(e.target.value)} InputProps={{style:{height:'4rem', fontSize:20}}}/>
        <br/>
        {toggleEmail?(!emailError?
        (<TextField  id= "outlined-basic" label="Email" variant="outlined" sx={{background: 'white', width:'35rem'}} value={email} onChange={(e)=>setEmail(e.target.value)} InputProps={{style:{height:'4rem', fontSize:20}}}/>):(<TextField error id="outlined-error-helper-text"
        variant="outlined" sx={{background: 'white', width:'35rem'}} value={email} onChange={(e)=>setEmail(e.target.value)}
          label="Email"
          helperText="Please enter a valid email."
         InputProps={{style:{height:'4rem'}}}/>))
        :
        (<TextField id="outlined-basic" label="Phone" variant="outlined" sx={{background: 'white', width:'35rem'}} value={phone} onChange={(e)=>setPhone(e.target.value)} InputProps={{style:{height:'4rem', fontSize:20}}}/>)}

<span className={style.toggle} onClick={handleToggle}>Use{toggleEmail?' phone':' email'} instead</span>

{!passwordError? (<TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{background: 'white', width:'35rem'}} value={password} onChange={(e)=>setPassword(e.target.value)} InputProps={{style:{height:'4rem', fontSize:20}}}/>)
:
(<TextField error id="outlined-error-helper-text" label="Password" variant="outlined" type="password" sx={{background: 'white', width:'35rem'}} value={password} onChange={(e)=>setPassword(e.target.value)} helperText="Please enter a strong password." InputProps={{style:{height:'4rem', fontSize:20}}}/>)}

<div className={styles.dob}>
  <h3>Date of birth</h3>
<span>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
</div>


        <span className={style.date}>
         
            <select id='gMonth2' style={{ width: '17rem', height: "3.5rem",margin:'1rem 0' }} value={month}  onChange={(e)=>setMonth(e.target.value)}>
              <option selected value=''>Month</option>
            {monthArray.map(ele=>(<option>{ele}</option>))}
          
            </select>

            <select id='gMonth2' style={{ width: '8rem', height: '3.5rem',margin:'1rem 0' }} value={date} onChange={(e)=>setDate(e.target.value)}>
              <option value=''>Day</option>
             {dateArray.map(ele=>(<option>{ele}</option>))}

            </select>

            <select id='gMonth2' style={{ width: '8rem', height: "3.5rem",margin:'1rem 0' }} value={year}
            onChange={(e)=>setYear(e.target.value)} >
              <option value=''
              >Year</option>
              {yearArray.map(ele=>(<option>{ele}</option>))}
              
            </select>
          </span>
        <CustomButton
                buttonText="Next"
                customCss={style.btn3}
                btnNext={handleNext}
              ></CustomButton>
    </form>):
    (<>
       <TwitterIcon
        sx={{ color:"rgb(29, 155, 240)",size:"bigger", fontSize:'3rem'}}
        />
        <h1 style={{fontSize:45, margin:'2rem 0'}}>Join Twitter today</h1>
        <CustomButton
                buttonText="Sign in with Google"
                customCss={style.btn1}
                icon={<FcGoogle style={{fontSize:25}}/>}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Sign in with Apple"
                icon={<BsApple style={{fontSize:25}}/>}
                customCss={style.btn1}
              ></CustomButton>
              <br />

              <div className={style.or}>
                <p className={style.line}>______________________</p>
                or
                <p className={style.line}>______________________</p>
              </div>
              
              <CustomButton
                buttonText="Create Account"
                customCss={style.btn2}
                btnNext={handleCreate}
              ></CustomButton>
              <p className={style.txt1}>
                  By signing up, you agree to the Terms of Service <br />
                  and Privacy Policy, including Cookie Use.
                </p>
                <div className={style.txt2}>
                Have an Account Already..? <Link to="/"> Log in</Link>
              </div>
       </>)}
       
        </Box>
      </Modal>
    </div>
  
  
   </>
)
}

export default SignUp