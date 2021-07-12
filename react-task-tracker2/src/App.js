import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import { useState } from 'react'
import AddTask from './components/AddTask.js'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Morning Routine',
    date: '4/6/2021',
    reminder: true,
  },
  {
    id: 2,
    title: 'Digital Learning',
    date: '4/7/2021',
    reminder: true,
  },
  {
    id: 3,
    title: 'Evening Routine',
    date: '15/6/2021',
    reminder: false,
  }])

  //Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder Setting
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      
      <Header title='Nats' />
      <AddTask />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>

    </div>
  );
}

export default App;
