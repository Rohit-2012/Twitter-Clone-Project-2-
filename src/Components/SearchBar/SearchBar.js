import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import style from './SearchBar.module.css'
// import { useState } from 'react'
function SearchBar() {
    // const[searchTerm,setSearchTerm]=useState('')  
  return (
    <div className={style.SearchBarDiv}>
      <span>  <SearchIcon color="disabled" fontSize="large" className={style.SearchIcon}/></span>
       <input
       className={style.SearchBar}
       
       type='text'
    
      placeholder= ' Search here'
    
    //   onChange={(e)=>{
    //     setSearchTerm(e.target.value)
    //   }}
    />
    </div>
  )
}

export default SearchBar

