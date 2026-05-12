/*
8. Develop a Reminder Application that allows users to efficiently manage their tasks. The application
should include the following functionalities: Provide a form where users can add tasks along with due dates.
The form includes task name, Due date, An optional description. Display a list of tasks dynamically
as they are added. Show relevant details like task name, due date, and completion status. Include a
filter option to allow users to view all Tasks and Display all tasks regardless of status. Show only
tasks marked as completed. Show only tasks that are not yet completed.
*/

import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'not-completed') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Task Reminder</h1>
      <TaskForm addTask={addTask} />
      <Filter setFilter={handleFilterChange} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;