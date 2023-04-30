import React,{useState} from 'react'
import {CiHeart} from 'react-icons/ci'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet} from 'react-icons/ai'
import {MdOutlinePoll} from 'react-icons/md'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dialog from '@mui/material/Dialog';
 import DialogActions from '@mui/material/DialogActions';
 import Buttons from "../Buttons/Buttons"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Card.module.css'
import { tweetPosts } from "../../Utils/tweetPosts"
//import {profileIcon} from "../../Utils/profileIcon"
import  profile from '../../Assets/profile.png';

function Card() {
    const [count,setCount]=useState(0)
    const [open, setOpen] = React.useState(false);
    // const Satya =[{
    //     profile: <AccountCircleIcon style={{ fontSize: "50px" }} />,
    // }]
    const images = new Array(1000).fill(0).map((x, index) => {
        return `https://picsum.photos/1000/500?q=${index}`;
      });
    
    function Count(){
        setCount(count +1)
      }
      const handleClickOpen = () => {
             setOpen(true);
           };
        
         const handleClose = () => {
           setOpen(false);
           };

      return(
        <>
    
      

        {tweetPosts.map((tweetPost,index)=>{
      return(
    <>
    <div key={index} className={style.maindiv}>
    
        <span className={style.profile}>{<AccountCircleIcon style={{ fontSize: "50px" }} />}</span>
        <span style={{marginLeft: "-13rem"}}>{tweetPost.name}<span style={{fontSize: "11px"}}>{tweetPost.handlerName}</span></span>
        <p style={{marginLeft: "-10rem"}}>{tweetPost.organization}</p>
         
        <div picdiv> {images.map((image, index) => { 
            return <img key={index} src={image} style={{ width: "720px",height:"300px" }} />;})}</div>
    
        <span>
         <Dialog
                open={open}
                onClose={handleClose}
    
               > 
           <img src={profile} alt="" className={style.BigPhoto} />
                {/* <img src={didi} alt="" className={style.BadiDidi} /> */}
                 <textarea className={style.ForTweet}
                 placeholder='What is happening ?'
                 /> 
    <DialogActions>
    <Buttons className={style.btns} btnNext={handleClose} 
         image={<FaRegComment className={style.Comment} />}/></DialogActions></Dialog>
              <Buttons className={style.btns} image={<AiOutlineRetweet style={{fontSize: "15px"}}/>}/>{tweetPost.retweetCount}
              <Buttons btnNext={Count} className={style.btns} image={<CiHeart style={{fontSize: "15px" }}/>}/>{count}
        </span>
         
    </div>
          </>)
        })}
    </>
      )
}

export default Card;