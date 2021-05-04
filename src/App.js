import Header from './components/Header'
import Tasks from './components/tasks'
import React, { useState } from 'react'
import AddTask from './components/AddTask';
import Edit from './components/Edit'
 

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Doctors Appointment",
        day:"Feb 5th at 2:30pm",
        reminder:false,
    },
    {
        id:2,
        text:"Food Shopping",
        day:"Feb 6th at 4:30pm",
        reminder:false,
    },
    {
        id:3,
        text:"Take Test",
        day:"Monday 5pm",
        reminder:true,
    },
]);
const [editClick,setEditClick] = useState(false);
const [textState,setText] = useState('')
const Ondelete = (id) => {
 setTasks(tasks.filter(task => {
   return task.id !== id
 }))
} 
 
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => {
    return task.id === id ? {...task,reminder : !task.reminder} : task
    })
  );
}
  const onAdd = (task) => {
    setTasks([...tasks,task])
 
  }
  const removeTask = (task,replace) => {
    if(task == -1){
      task = 0
    }
    
    setTasks(tasks.map((obj,i) => {
      return task == i ? replace : obj
    }))
  }
 
  const editData = (id) => {
      let currentDataText = tasks.find((task) => {
        return task.id == id
      })
      console.log(currentDataText)
      setText(currentDataText)
  }
  const pencil = (id)=> {
    setEditClick(true)
    setShowAddTask(false)
    editData(id);
  }

 
    return <div className = "container">
      <Header clicked = {editClick} onShowAdd = {() =>{
         return setShowAddTask(!showAddTask), setEditClick(false)
      }} 
      showAdd = {showAddTask}
      />
 
    { showAddTask ?  <AddTask data = {textState} clicked = {editClick}  onAdd = {onAdd}/>:  ''}
      {editClick ? <Edit task = {tasks} removeTask = {removeTask} data = {textState} onAdd ={onAdd}/> : ''}
      <Tasks pencil = {pencil} tasks = {tasks} Ondelete ={Ondelete} onToggle = {toggleReminder}/>
    </div>
}
export default App;