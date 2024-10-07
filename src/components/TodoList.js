import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo, saveTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          toggleTodo={() => toggleTodo(index)} 
          deleteTodo={() => deleteTodo(index)} 
          editTodo={() => editTodo(index)} 
          saveTodo={(newText) => saveTodo(index, newText)} 
        />
      ))}
    </div>
  );
}

export default TodoList;
