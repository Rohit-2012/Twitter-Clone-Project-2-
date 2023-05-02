import React from 'react'
import styles from './RightSection.module.css'
// import RightSecDiv from '../../Component/RightSecDIv/RightSecDiv'
import RightFollow from '../../components/RightFollow/RightFollow'
import RightTrend from '../../components/RightTrend/RightTrend'
import SearchBar from '../../components/SearchBar/SearchBar'
function RightSection() {
  return (
    <div className={styles.mainDiv}>
    <div>
      <SearchBar /></div>
      <br />
      <RightTrend/>
      <br />
       <RightFollow/> 
    </div>
  )
}

export default RightSection