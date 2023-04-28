import React from "react";
import style from "./Follow.module.css"
import data from "../userData.json";
import { useState } from "react";
import { Button } from '@mui/material';

function Follow() {
  const [trending, setTrendings] = useState(data.slice(0, 2));
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);

  const handleClick = (id) => {
    const updatedFollowContainer = data.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
   
    setTrendings(updatedFollowContainer)
  };
  function handleRequestSeeAll() {
    setIsShowingAllTrendings(!isShowingAllTrendings);
   
    if (isShowingAllTrendings) {
      return setTrendings(data.slice(0, 2));
    }
    setTrendings(Follow);
  }

  return (
    <div className={style.main}>
      <h3 style={{display:"flex",
      justifyContent:"center"}}>Who to follow</h3>

      {data.map((data, i) => (
        <div className={style.wrapper}>
        <div className={style.main1}>
        <span> <img src={data.image} className={style.images}/></span>  
        <div className={style.text}>
        <h3 >{data.name}</h3>
        <h6>{data.email}</h6>
        </div>
       </div>
         <button className={style.button} btnNext={() => handleClick(data.id)}> {data.followed ? "Following" : "Follow"}</button>
        </div>
      ))}
      { (
        <div style={{marginLeft:"1.3rem",color:"#1D9BF0"}} onClick={handleRequestSeeAll}>
          {isShowingAllTrendings ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
  );
}

export default Follow;
