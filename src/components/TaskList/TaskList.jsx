import React from 'react'
import Task from './Task'
import s from './TaskList.module.css'

const TaskList = ({tasks, onDelete}) => {
    return (
        <>
            <ul className={s.list}>
                {tasks.map((task) => 
                    <Task key={task.id} id={task.id} text={task.text} onDelete={onDelete}/>
                )}
            </ul>
        </>
    )
}

export default TaskList
