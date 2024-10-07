import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, saveTodo }) {
  const [editText, setEditText] = useState(todo.text);

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  return (
    <div >
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
          />
          {/* Make sure saveTodo doesn't cause rerender loop */}
          
          <div className="button-group">
          <button onClick={() => saveTodo(editText)}>Save</button>
        </div>
        </div>
      ) : (
        <div>
          <span onClick={toggleTodo}>{todo.text}</span>
          <div className="button-group">
          <button onClick={editTodo}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default TodoItem;



// import React, { useState } from 'react';

// function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, saveTodo }) {
//   const [editText, setEditText] = useState(todo.text);

//   function handleEditChange(e) {
//     setEditText(e.target.value);
//   }

//   return (
//     <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//       {todo.isEditing ? (
//         <input
//           type="text"
//           value={editText}
//           onChange={handleEditChange}
//         />
//       ) : (
//         <span onClick={toggleTodo}>{todo.text}</span>
//       )}
//       <div className="button-group">
//         <button onClick={editTodo}>Edit</button>
//         <button onClick={deleteTodo}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;





