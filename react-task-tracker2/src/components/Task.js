import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>
                {task.title} <FaTimes style={{color: 'red', cursor: 'pointer'}} />
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
