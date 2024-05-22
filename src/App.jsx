import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import ProductivityTimer from "./components/ProductivityTimer";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const fetchTodos = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${selectedUser.id}`
        );
        setTodos(response.data);
        console.log(response.data);
      };
      fetchTodos();
    }
  }, [selectedUser]);

  const handleUserSelect = (userId) => {
    setSelectedUser(users.find((user) => user.id === userId));
  };
  

  return (
    <div className="App">
      <h1>Productivity App</h1>
      <UserList users={users} onSelect={handleUserSelect} />
      {selectedUser && (
        <>
          <h2>Todos for {selectedUser.name}</h2>
          <TodoList todos={todos} />
        </>
      )}
      <ProductivityTimer />
    </div>
  );
}

export default App;
