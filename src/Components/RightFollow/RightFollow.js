


import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import Buttons from '../Buttons/Buttons';
import style from './RightFollow.module.css'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function RightFollow() {
    const handleClick = (id) => {
        const updatedFollowContainer = followContainer.map((item) => {
          if (item.id === id) {
            item.followed = !item.followed;
          }
          return item;
        });
        setFollowContainer(updatedFollowContainer);
      };
      const [followContainer, setFollowContainer] = useState([
        {
          id: 1,
         
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
          text: "virat",
          text2: "virat@gmail.com",
        },
        {
          id: 2,
        
          src: "https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg",
          text: "Rohit",
          text2: "rohits@gmail.com",
        },
        {
          id: 3,
        
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa_q7k5ZBQ590c5TlV-Fu7kO31Y20J1f4eA&usqp=CAU",
          text: "Sachin",
          text2: "sachin@gmail.com",
        },
        {
          id: 4,
   
          src: "https://play-lh.googleusercontent.com/jEwZGCi6DVMYWlJtVHuliR4Dve2eaqbC5NY73uDwCGBHD7l2fx2OxMih_1oHDQXX-Q=w240-h480-rw",
          text: "Anuj bhati",
          text2: "anujbhati@gmail.com",
        },
      ]);
  return (
    <div className={style.mainParent}>
    <h2>  Who to follow</h2>
     {followContainer.map((data)=>
     <div className={style.wrapper}>
                  
                    <div className={style.img}>
                    <Avatar alt="Remy Sharp" src={data.src} />
                      <h3 >
                        {data.text}
                        
                      </h3>
                      <h6>{data.text2}</h6>
                    </div>
                    <div className={style.btntxt}>
      <Buttons Sign={data.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(data.id)}
                  key={data.id}
                  className={style.followButton}
                  disabled={data.followed}/>
       </div> 
       </div>
     )}
     <br/>
      <div className={style.End1}>Show more</div>
    </div>
  )
}

 export default RightFollow


