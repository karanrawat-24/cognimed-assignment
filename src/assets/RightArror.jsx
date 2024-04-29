import React from 'react';

const RightArror = ({setIsOpen}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-7 h-7 cursor-pointer  bg-gray-600 rounded-full text-white p-1'
      onClick={() => setIsOpen(true)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
      />
    </svg>
  );
};

export default RightArror;
