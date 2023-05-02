import { TextField } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import CustomButton from "../../components/CustomButton/CustomButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isLoginAtom } from "../../Atom/Atom";
import style from "./Sign-In.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
  outline: 0,
};

const SignIn = () => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/");
    }
  });

  const [string, setString] = useState('')
  const [stringError, setStringError] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [next, setNext] = useState(false)
  const [user, setUser] = useState([])

  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('UserDetail'))||[])
  }, [])
  // console.log(user)
  function handleNext(e){
    e.preventDefault()
    if ((!regEmail.test(string))||(string.trim() ==='')) {
      setStringError(true);
  }else{
    if(user.find(e=>e.email === string)===undefined){
      setStringError(true)
      alert('user not found')
    }
    else{
    setStringError(false);
    setNext(true)
    }
  }
  }

  function hadleLogIn(e){
    e.preventDefault()
    if(password.trim() ===''){
      setPasswordError(true)
    }else{
      if(user.find(e=>e.password === password)===undefined){
        setPasswordError(true)
      }else{
        setPasswordError(false)
        setLoginStatus(true);
      navigate("/");
      }
    }
  }
    
  return (
    <>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
              <form onSubmit={()=>{}} className={style.formBox}>
                {next?(<>
                  <TwitterIcon
                    sx={{
                      color: "rgb(29, 155, 240)",
                      size: "bigger",
                      fontSize: "3rem",
                    }}
                  />
                  <h1 style={{ fontSize: 45, margin: "2rem 0" }}>
                  Enter your password
                  </h1>
                  <TextField
                    disabled
                    id="filled-disabled"
                    label='Email'
                    defaultValue={string}
                    variant="filled"
                    sx={{ background: "white", width: "35rem" }}
                    onChange={(e) => setString(e.target.value)}
                    InputProps={{ style: { height: "5rem", fontSize: 20 } }}
                  />
                  <br />
                  {!passwordError?
                  (<TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{background: 'white', width:'35rem'}} value={password} onChange={(e)=>setPassword(e.target.value)} InputProps={{style:{height:'5rem', fontSize:20}}}/>)
                :
                (<TextField error id="outlined-error-helper-text" label="Password" variant="outlined" type="password" sx={{background: 'white', width:'35rem'}} value={password} onChange={(e)=>setPassword(e.target.value)} helperText="Please enter a valid password." InputProps={{style:{height:'5rem', fontSize:20}}}/>)}
                  <span className={style.forgot}>Forgot password?</span>


                  <CustomButton
                    buttonText="Log in"
                    customCss={style.btn3}
                    btnNext={hadleLogIn}
                  ></CustomButton>
                </>)
                :
                (<>
                  <TwitterIcon
                    sx={{
                      color: "rgb(29, 155, 240)",
                      size: "bigger",
                      fontSize: "3rem",
                    }}
                  />
                  <h1 style={{ fontSize: 30, margin: "2rem 0" }}>
                    Sign in to Twitter
                  </h1>
                  <CustomButton
                    buttonText="Sign in with Google"
                    customCss={style.btn1}
                    icon={<FcGoogle style={{ fontSize: 25 }} />}
                  ></CustomButton>
                  <br />
                  <CustomButton
                    buttonText="Sign in with Apple"
                    icon={<BsApple style={{ fontSize: 25 }} />}
                    customCss={style.btn1}
                  ></CustomButton>
                  <br />
  
                  <div className={style.or}>
                    <p className={style.line}>___________________</p>
                    or
                    <p className={style.line}>___________________</p>
                  </div>
  
  
                  {stringError?
                  (<TextField error id="outlined-error-helper-text"
                  variant="outlined" sx={{background: 'white', width:'20rem'}} value={string} onChange={(e)=>setString(e.target.value)}
                    label="Phone, email or username"
                    helperText="Please enter a valid detail."
                   InputProps={{style:{height:'3.5rem'}}}/>)
                  :
                  (<TextField
                    id="outlined-basic"
                    label="Phone, email or username"
                    variant="outlined"
                    sx={{ background: "white", width: "20rem" }}
                    value={string}
                    onChange={(e) => setString(e.target.value)}
                    InputProps={{ style: { height: "3.5rem", fontSize: 20 } }}
                  />)}
  
                  <CustomButton
                    buttonText="Next"
                    customCss={style.btn2}
                    btnNext={handleNext}
                  ></CustomButton>
                 
                  <CustomButton
                    buttonText="Forgot password?"
                    customCss={style.btn1}
                  ></CustomButton>
                 
                  <div className={style.txt2}>
                    Don't have an account? <Link style={{color:'rgb(12, 145, 185)', textDecoration:'none'}} to="/signUp"> Sign Up</Link>
                  </div>
                </>)}
               
              </form>
            
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SignIn;
