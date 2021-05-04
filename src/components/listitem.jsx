import {FaTimes} from 'react-icons/fa'
import {GrEdit} from 'react-icons/gr'
const Listitem = ({task,Ondelete,onToggle,pencil}) => {
    // task?.reminder
    // task.reminder ? 'remind' : ''
    return (<div onDoubleClick = {() => onToggle(task.id)} className = {`item ${task.reminder ? 'remind' : ''}` }>
        <div 
        className = 'left'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
        <div className = 'right'>
            <FaTimes onClick ={() => Ondelete(task.id)} style = {{color:'red',cursor :'pointer'}} />
            <GrEdit onClick = {pencil.bind(null,task.id)}     style = {{cursor:'pointer'}}/>
        </div>
    </div>)
}

export default Listitem