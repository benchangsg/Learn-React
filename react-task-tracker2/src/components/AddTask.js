import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add Date' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input className='form-control-check-input' type='checkbox' />
            </div>
            <input type='submit' className='btn btn-block' value='Save Task' />
        </form>
    )
}

export default AddTask
