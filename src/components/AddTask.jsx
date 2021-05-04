import React, { useState } from 'react'
 
 
const AddTask = ({onAdd,clicked,data,task,removeTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remind, setReminder] = useState(false)
    const [id, setId] = useState(4)
    const [show, setShow] = useState(false)
 /*
when i click on pencil state == true show edit then when i click on edit i want to set state = flase so i can add
 */
 
 
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
    setShow(true)
}
 
 
 
 
    return (
        <form  className = 'taskForm' onSubmit = {onSubmit}>
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
 
            <input type="submit" name ='submit' id = 'submit' value = {show ? 'Edit' : 'Save Task'}
            style = {show ? {backgroundColor:'orange'} : {backgroundColor:'black'}}
            className = 'btn' 
            />
        </form>
    )
}
 
export default AddTask
