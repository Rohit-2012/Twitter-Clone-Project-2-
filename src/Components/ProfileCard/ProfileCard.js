import React from 'react'
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import style from './ProfileCard.module.css'
import Profile from '../../Assets/profile.png'
function ProfileCard() {
  return (
    <div className={style.mainDiv}>
    
      <img src={Profile} className={style.Photo1}/>
      <textarea className={style.inputs}
      
      placeholder='What’s happening'/>
      <p style={{color:' #00acee',fontWeight:'600'}}> < PublicOutlinedIcon />Everyone can reply</p>
  <div className={style.Icons}> <BrokenImageOutlinedIcon/>
   <GifBoxOutlinedIcon/>
   <BallotOutlinedIcon/>
   <SentimentSatisfiedAltOutlinedIcon/>
  <EventRepeatOutlinedIcon/></div>
  <div className={style.BTN}>
  <button className={style.btn}>Tweet</button>
  </div> </div>
  )
}

export default ProfileCard
