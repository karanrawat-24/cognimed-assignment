const ToggleIcon = ({ userMode, setUserMode }) => {
    console.log(userMode);
  return (
    <div className='h-24 w-10 bg-[#ececed] rounded-3xl'>
      {userMode?(
        <button
          className=' bg-black w-8 h-8 rounded-full absolute mt-1 ml-1 cursor-pointer'
          onClick={() => setUserMode(false)}
        ></button>
      ) : (
        <button
          className=' bg-black w-8 h-8 rounded-full absolute mt-14 ml-1 cursor-pointer'
          onClick={() => setUserMode(true)}
        ></button>
      )}
    </div>
  );
};

export default ToggleIcon;
