import React from 'react'
import s from './Filter.module.css'
const Filter = ({value, onFilter}) => {
  return (
    <div className={s.filterContainer}>
      <p>Search by words {"->"}</p>
      <input type="text" value={value} onChange={(e)=>{onFilter(e.target.value)}} className={s.input}/>
    </div>
  )
}

export default Filter
