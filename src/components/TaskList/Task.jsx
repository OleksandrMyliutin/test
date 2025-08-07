import React from 'react'
import s from './Task.module.css'
const Task = ({id, text, onDelete}) => {
    return (
        <li className={s.listItem}>
            <p className={s.paragraph}>{text}</p>
            <button className={s.btn} type='button' onClick={()=> onDelete(id) }>Delete</button>
        </li>
    )
}

export default Task
