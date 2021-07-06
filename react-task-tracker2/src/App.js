import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import { useState } from 'react'

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

  return (
    <div className="container">
     <Header title='Nats' />
     <Tasks tasks={tasks}/>

    </div>
  );
}

export default App;
