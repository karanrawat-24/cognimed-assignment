import React from 'react';

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type='text'
      placeholder='Search..'
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      className='bg-[#52566d] text-white placeholder-white rounded-lg w-[96%] py-1 pl-2 ml-1 mt-2 lg:py-2 mb-2'
    />
  );
};

export default SearchBox;
