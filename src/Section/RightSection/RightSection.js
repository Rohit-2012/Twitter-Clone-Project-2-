import { style } from '@mui/system'
import React from 'react'
 import styles from './RightSection.module.css'
// import RightSecDiv from '../../Component/RightSecDIv/RightSecDiv'
import RightFollow from '../../Components/RightFollow/RightFollow'
import RightTrend from '../../Components/RightTrend/RightTrend'
import SearchBar from '../../Components/SearchBar/SearchBar'
function RightSection() {
  return (
    <div>
<div className={styles.mainDiv}>
      <SearchBar /></div>
      <br />
      <RightTrend/>
      <br />
       <RightFollow/> 
    </div>
  )
}

export default RightSection
