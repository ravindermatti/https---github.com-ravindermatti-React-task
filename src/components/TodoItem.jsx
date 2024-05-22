import React from "react";

const TodoItem = ({ todo, onToggleCompleted }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
    </div>
  );
};

export default TodoItem;
