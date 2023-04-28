import { TextField } from "@mui/material"
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react"
import {yearArray, monthArray, dateArray} from '../../utils/constants'
import style from "./SignUp.module.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 650,
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
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [date , setDate] = useState('')
    const [month , setMonth] = useState('')
    const [year , setYear] = useState('')
    const [toggleEmail , setToggleEmail] = useState(false)
    const [info, setInfo] = useState([])

    const handleNext= (e)=>{
        e.preventDefault()
        const data = { name: name, email: email,phone: phone, DOB: `${ month+ '/' + date+ '/' + year}`}
        setInfo([...info, data])
        setName("")
        setEmail("")
        setPhone('')
        setMonth("")
        setDate("")
        setYear("")
        localStorage.setItem("UserDetail", JSON.stringify([...info, data]))
    }

    const handleToggle = ()=>{
      setToggleEmail(!toggleEmail)
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
        <form onSubmit={handleNext} className={style.formBox}>
            <h1>Create your account</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{background: 'white', width:'80%', height:'4rem'}} value={name} onChange={(e)=>setName(e.target.value)}/>
        
        {toggleEmail?(<TextField id="outlined-basic" label="Email" variant="outlined" sx={{background: 'white', width:'75%'}} value={email} onChange={(e)=>setEmail(e.target.value)} />):(<TextField id="outlined-basic" label="Phone" variant="outlined" sx={{background: 'white', width:'75%'}} value={phone} onChange={(e)=>setPhone(e.target.value)}/>)}
        
        <span className={style.toggle} onClick={handleToggle}>Use{toggleEmail?' phone':' email'} instead</span>

        <span className={style.date}>
         
            <select id='gMonth2' style={{ width: '13rem', height: "3.5rem" }} value={month}  onChange={(e)=>setMonth(e.target.value)}>
              <option selected value=''>Month</option>
            {monthArray.map(ele=>(<option>{ele}</option>))}
          
            </select>

            <select id='gMonth2' style={{ width: '5rem', height: '3.5rem' }} value={date} onChange={(e)=>setDate(e.target.value)}>
              <option value=''>Day</option>
             {dateArray.map(ele=>(<option>{ele}</option>))}

            </select>

            <select id='gMonth2' style={{ width: '7rem', height: "3.5rem" }} value={year}
            onChange={(e)=>setYear(e.target.value)} >
              <option value=''
              >Year</option>
              {yearArray.map(ele=>(<option>{ele}</option>))}
              
            </select>
          </span>
        <Button variant="contained" type="submit" size="large" sx={{width:'27rem', height:'3.5rem', backgroundColor:'gray', borderRadius:'5rem', fontWeight:'bold'}}>Next</Button>
    </form>
        </Box>
      </Modal>
    </div>
  
  
   </>
)
}

export default SignUp