import { useState } from 'react';
import Chat from './components/Chat';
import UserList from './components/UserList';
import { demoUserData, demoDocData } from './assets/userData';
import IconSideBar from './components/IconSideBar';
import LeftArrow from './assets/LeftArrow';
import RightArrow from './assets/RightArror';
import ResearchDoc from './components/ResearchDoc';
import ResearchChat from './components/ResearchChat';
import SearchBox from './components/SearchBox';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(demoUserData[0]);
  const [selectedTopic, setSelectedTopic] = useState(demoDocData[0]);
  const [isOpen, setIsOpen] = useState(true);
  const [userMode, setUserMode] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  return (
    <div className='flex'>
      {/* Icon bar and user or Research topic  */}
      {isOpen ? (
        <div className='flex'>
          <div className='w-[80px] h-screen bg-[#232531] text-[#b7b7b9]'>
            <IconSideBar userMode={userMode} setUserMode={setUserMode} />
          </div>
          <div className='w-[250px] lg:w-[350px] h-screen bg-[#1b1c21] text-[#b7b7b9]'>
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            {userMode ? (
              <div>
                <UserList
                  users={demoUserData}
                  setSelectedUser={setSelectedUser}
                  filter = {searchValue}
                />
              </div>
            ) : (
              <div>
                <ResearchDoc
                  docs={demoDocData}
                  setSelectedTopic={setSelectedTopic}
                  filter = {searchValue}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        ''
      )}

      {/* toggle button */}
      {isOpen ? (
        <div className='left-[313px] lg:left-[413px] absolute text-gray-400 top-1/2'>
          <LeftArrow setIsOpen={setIsOpen} />
        </div>
      ) : (
        <div className='absolute text-gray-400  top-1/2'>
          <RightArrow setIsOpen={setIsOpen} />
        </div>
      )}

      {/* chat box */}
      {userMode ? (
        <div className='w-full h-screen bg-[#1f2138] text-[#c5c5c7]'>
          {selectedUser && <Chat user={selectedUser} />}
        </div>
      ) : (
        <div className='w-full h-screen bg-[#d9dbe4] text-[#414244]'>
          {selectedTopic && <ResearchChat doc={selectedTopic} />}
        </div>
      )}
    </div>
  );
};

export default App;
