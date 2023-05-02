import React ,{useState}from 'react'
import style from './RightTrend.module.css'
import  MorePop  from '../../Library/MorePop/MorePop';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function RightTrend() {
  const[ismodalopen,setismodalOpen]=useState(false)
  const [data , setData] = useState([
    {
  id:1,
    isNotIntrested:false,
    Trends:"Entertainment · Trending",
    Hash:"#Rocky One Man Army",
    Tweets:"71.4K Tweets"
   },
   {
    id:2,
    isNotIntrested:false,
    Trends:"Trending in Pakistan",
    Hash:"#बागेश्वर_धाम_सरकार",
    Tweets:"Trending with #BageshwarDham"
   },
   {id:3,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#जय_राजाराम #जय_महावीर",
    Tweets:"Trending with Jai shree Ram"
   },
   {
    id:4,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#Exploreeverywhere जय श्री राम",
    Tweets:"Trending with जय श्री राम"
   },
   {
    id:5,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#एक ही स्रोत रामचंद्रजी की जय",
    Tweets:"Trending with रामचंद्रजी की जय "
   }
  ] 
  )


 
  


  return (
    <div className={style.mainParent}>
    <h2 style={{fontSize:'large',
    paddingTop:'1rem'
  }}>  What’s happening
     
    </h2>
     {data
    .map((data,index)=>
     <div className={style.parent} key={index}>
       <div className={style.trendbtn}>
      <div className={style.datadiv}>
        <div className={style.trends}>{data.Trends}</div>
        <div className={style.Hash}> {data.Hash}</div>
       <div className={style.trends}>{data.Tweets}</div> 
      </div>
            
        <MorePop/>
       </div>
       </div>
     )}
     
      <div className={style.Show}>Show more</div>
    </div>
  )
}

export default RightTrend