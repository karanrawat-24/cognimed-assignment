import React from 'react';

const LeftArrow = ({setIsOpen}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-7 h-7 cursor-pointer  bg-gray-600 rounded-full text-white p-1'
      onClick={() => setIsOpen(false)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5'
      />
    </svg>
  );
};

export default LeftArrow;
