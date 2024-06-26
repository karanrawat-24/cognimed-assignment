import React, { useMemo, useState } from 'react';
import ChatIcon from '../assets/ChatIcon';
import UsersIcon from '../assets/UsersIcon';
import SettingIcon from '../assets/SettingIcon';
import ToggleIcon from '../assets/ToggleIcon';

const IconSideBar = ({ userMode, setUserMode }) => {
  console.log('icon', userMode);
  return (
    <div className=' flex flex-col justify-between h-screen'>
      <div>
        <div className=' w-full h-14 flex justify-center'>
          <ChatIcon />
        </div>
        <div className=' w-full h-14 flex justify-center'>
          <UsersIcon />
        </div>

        <div className=' w-full h-14 flex justify-center'>
          <SettingIcon />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center mb-10'>
        <span className=' font-serif mb-1'>Mode 1</span>
        <div>
          <ToggleIcon userMode={userMode} setUserMode={setUserMode} />
        </div>
        <span className=' font-serif mt-1'>Mode 2</span>
      </div>
    </div>
  );
};

export default IconSideBar;
