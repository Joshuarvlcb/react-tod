import Listitem from "./listitem"

const Tasks = ({tasks,Ondelete,onToggle,pencil}) => {
    return <>
        {tasks.map((task,index) => (
            // <div key = {task.id}>
            // <h3>{task.text}</h3>
            // <p>{task.day}</p>
            // </div>
            <Listitem  key = {task.id} task={task} Ondelete = {Ondelete} onToggle = {onToggle} pencil ={pencil}  />
        ))}
    </>
}
export default Tasks