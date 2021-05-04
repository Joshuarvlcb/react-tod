import React, { useState } from 'react'
 
 
const AddTask = ({onAdd,data,task,removeTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remind, setReminder] = useState(false)
    const [id, setId] = useState(4)
 /*
when i click on pencil state == true show edit then when i click on edit i want to set state = flase so i can add
 */
 const setData = (e)=>  {
    e.preventDefault();
    setText(data.text);
    setDay(data.day);
    setReminder(data.reminder);
 
    if(day !== ''){
    let index = task.findIndex((obj,i) => {
        if(obj.id === data.id){
            return i
        }
    })
 
let id = data.id
        removeTask(index, {text,day,remind,id})
console.log(task);
 
    setText('')
    setDay('')
    setReminder(false)
    }
 
    
}
 
const onSubmit = (e) => {
    e.preventDefault()
    console.table({text,day,remind})
    
    if(!text){
        return alert('please type something')
    }
    if(!day){
        return alert('please type something')
    
    }
    onAdd({text,day,remind,id})
    setId(id + 1)
 
    onAdd({text,day,remind,id})
    setId(id + 1)
 
    setText('')
    setDay('')
    setReminder(false)
}
 
 
 
 
    return (
        <form  className = 'taskForm' onSubmit = {setData}>
            <div className="formInput">
                <label htmlFor="text">task</label>
                <input type="text" name = 'text' id = 'text' placeholder ='Add Task' value = {text}
                onChange = {(e) => setText(e.target.value)}
                />
            </div>
 
            <div className="formInput">
                <label htmlFor="day">day</label>
                <input type="text" name = 'day' id = 'text' placeholder ='Add Day And Time' value = {day}
                onChange = {(e) => setDay(e.target.value)}/>
            </div>
 
            <div className="formCheck">
                <label htmlFor="reminder">reminder</label>
                <input type="checkbox" name = 'reminder' id = 'text'  checked = {remind}
                onChange = {(e) => {setReminder(e.target.checked)}}/>
            </div>
 
            <input type="submit" name ='submit' id = 'submit' value = {'Edit'}
            style = {{backgroundColor:'orange'}}
            className = 'btn' 
            />
        </form>
    )
}
 
export default AddTask


 
