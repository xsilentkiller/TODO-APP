// import React, { useState } from 'react';
// import './App.scss';
// import TodoList from './components/TodoList';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   function addTodo() {
//     if (newTodo.trim()) {
//       setTodos([...todos, { text: newTodo, completed: false, isEditing: false }]);
//       setNewTodo(''); // Only update state on valid user interaction
//     }
//   }

//   function toggleTodo(index) {
//     const updatedTodos = todos.map((todo, i) => 
//       i === index ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos); // State update is fine here
//   }

//   function deleteTodo(index) {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   }

//   function editTodo(index) {
//     const updatedTodos = todos.map((todo, i) => 
//       i === index ? { ...todo, isEditing: true } : todo
//     );
//     setTodos(updatedTodos);
//   }

//   function saveTodo(index, newText) {
//     const updatedTodos = todos.map((todo, i) => 
//       i === index ? { ...todo, text: newText, isEditing: false } : todo
//     );
//     setTodos(updatedTodos); // Proper state update after Save
//   }

//   return (
//     <div className="app">
//       <h1>Todo List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} saveTodo={saveTodo} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false, isEditing: false }]);
      setNewTodo(''); // Only update state on valid user interaction
    }
  }

  function toggleTodo(index) {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos); // State update is fine here
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function editTodo(index) {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, isEditing: true } : todo
    );
    setTodos(updatedTodos);
  }

  function saveTodo(index, newText) {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(updatedTodos); // Proper state update after Save
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} saveTodo={saveTodo} />
    </div>
  );
}

export default App;
