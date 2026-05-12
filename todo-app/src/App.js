/*
4. Develop a To-Do List Application using React functional components that demonstrates the use of the
useState hook for state management. Create a functional component named ToDoFunction to manage and
display the to-do list. Maintain a list of tasks using state. Provide an input field for users to
add new tasks. Dynamically render the list of tasks below the input field. Ensure each task is
displayed in a user-friendly manner. Allow users to delete tasks from the list. Mark tasks as
completed or pending, and visually differentiate them.
*/

import { useState } from 'react';
import './App.css';

const ToDoFunction = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">To-Do List</h2>
      
      <div className="todo-input-wrapper">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button className="add-task-button" onClick={addTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`todo-item ${task.completed ? 'completed' : ''}`}
          >
            <span
              className="task-text"
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoFunction;