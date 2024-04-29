import React, { useState } from 'react';
import SendIcon from '../assets/SendIcon';
const ResearchChat = ({ doc }) => {
  const [msg, setMsg] = useState('');
  const sendMsg = () => {};
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div>
        <h2>Chat with {doc.topic}</h2>
        <div className='chat-messages'></div>
      </div>

      <div className='flex justify-center'>
        <input
          type='text'
          placeholder='Type your message...'
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className='w-full rounded-l-lg p-2 ml-1 bg-[#9b9eb4] placeholder-[#efeff7]'
        />
        <SendIcon />
      </div>
    </div>
  );
};

export default ResearchChat;
