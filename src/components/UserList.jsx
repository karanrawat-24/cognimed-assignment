import React, { useState } from 'react';

const UserList = ({ users, setSelectedUser, filter }) => {
  const [choosen, setChoosen] = useState(1);
  const handleClick = (e) => {
    console.log(e);
    setSelectedUser(e);
    setChoosen(e.id);
  };

  return (
    <div className='user-list'>
      <ul>
        {users
          .filter((user) => user.id == filter || user.username.includes(filter))
          .map((user) => (
            <li
              key={user.id}
              onClick={() => handleClick(user)}
              className={`${
                user.id == choosen ? 'active' : ''
              } cursor-pointer p-1`}
            >
              <div className='flex flex-col pt-2 pl-3'>
                <span className='font-semibold'>{user.username}</span>
                <span>chat here</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
