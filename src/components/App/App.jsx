import Filter from "../Filter/Filter"
import Form from "../Form/Form"
import TaskList from "../TaskList/TaskList"
import initialTasks from '../../tasks.json'
import './App.css'
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');
  const addTask = (newTask) =>{
    setTasks((prevTask) => {
      return[...prevTask, newTask]
    })
  };
  const deleteTask = (taskId)=>{
    setTasks((prevTask) =>{
      return prevTask.filter((task) => {
        return task.id !== taskId;
      });
    });
  };
  const visibleTask = tasks.filter((task) => task.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  return (
    <>
      <div className='card'>
        <Form onAdd={addTask}/>
        <Filter value={filter} onFilter={setFilter}/>
        <TaskList tasks={visibleTask} onDelete={deleteTask}/>
      </div>
    </>
  )
}

export default App
