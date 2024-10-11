import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
    // Step 1: Initialize the state with tasks, loading from localStorage if available
    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    });
  
    const [newTask, setNewTask] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskText, setEditTaskText] = useState('');
  
    // Step 2: Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    // Step 3: Add a new task
    const addTask = () => {
      if (newTask.trim() !== '') {
        const task = {
          id: Date.now(),
          text: newTask,
        };
        setTasks([...tasks, task]);
        setNewTask(''); // Clear the input after adding
      }
    };
  
    // Step 4: Delete a task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    // Step 5: Update a task
    const startEditingTask = (id, text) => {
      setEditTaskId(id);
      setEditTaskText(text);
    };
  
    const updateTask = () => {
      setTasks(
        tasks.map((task) =>
          task.id === editTaskId ? { ...task, text: editTaskText } : task
        )
      );
      setEditTaskId(null);
      setEditTaskText(''); // Reset edit inputs after updating
    };
  
    return (
      <div className="todo-app-container">
        <h1 className="todo-title">Todo List</h1>
  
        <div className="task-input-section">
          <input
            type="text"
            className="task-input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button className="task-add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>
  
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editTaskId === task.id ? (
                <div className="task-edit-section">
                  <input
                    type="text"
                    className="task-edit-input"
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                  />
                  <button className="task-save-btn" onClick={updateTask}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="task-display-section">
                  <span className="task-text">{task.text}</span>
                  <div className="task-actions">
                    <button
                      className="task-edit-btn"
                      onClick={() => startEditingTask(task.id, task.text)}
                    >
                      Edit
                    </button>
                    <button
                      className="task-delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
