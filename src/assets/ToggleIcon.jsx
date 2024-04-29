const ToggleIcon = ({ userMode, setUserMode }) => {
  console.log(userMode);
  return (
    <div className='h-24 w-10 bg-[#ececed] rounded-3xl flex justify-center'>
      {userMode ? (
        <button
          className=' bg-black w-8 h-8 rounded-full  mt-1  cursor-pointer'
          onClick={() => setUserMode(false)}
        ></button>
      ) : (
        <button
          className=' bg-black w-8 h-8 rounded-full  mt-14 cursor-pointer'
          onClick={() => setUserMode(true)}
        ></button>
      )}
    </div>
  );
};

export default ToggleIcon;
