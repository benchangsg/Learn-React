import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import { useState } from 'react'
import AddTask from './components/AddTask.js'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks(...tasks, newTask)
  }

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
      
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>

    </div>
  );
}

export default App;
