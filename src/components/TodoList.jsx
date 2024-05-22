import React, { useState } from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos, onToggleCompleted, onDeleteTodo }) => {
  const [filter, setFilter] = useState("all"); // State for filtering todos

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);

      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div>
      <div>
        <h3>Todos</h3>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul>
        {filteredTodos().map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                onToggleCompleted={() => onToggleCompleted(todo.id)}
                onDelete={() => onDeleteTodo(todo.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
