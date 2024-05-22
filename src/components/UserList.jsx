import React from "react";

const UserList = ({ users, onSelect }) => {
  return (
    <div>
      <h3>Select a User</h3>
      <ul>
        {users?.map((user) => {
          // console.log(user);
        return (
          <li key={user.id}>
            <button onClick={() => onSelect(user.id)}>{user.name}</button>
          </li>
        );
})}
      </ul>
    </div>
  );
};

export default UserList;
