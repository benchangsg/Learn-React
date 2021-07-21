import { useState } from 'react'


const AddTask = ({ addTask }) => {
    //Capture Task input
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(title === '') {
            alert('Fill in Task box')
            return
        }

        addTask({ title, date, reminder })

        setTitle('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add Task' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add Date' value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input className='form-control-check-input' type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save Task' />
        </form>
    )
}

export default AddTask
