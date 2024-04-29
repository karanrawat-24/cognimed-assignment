import React, { useState } from 'react';

const ResearchDoc = ({ docs, setSelectedTopic,filter }) => {
  const [choosen, setChoosen] = useState(1);
  const handleClick = (e) => {
    setSelectedTopic(e);
    setChoosen(e.id);
  };

  return (
    <div className='user-list'>
      <ul>
        {docs
          .filter((doc) => doc.id == filter || doc.topic.includes(filter))
          .map((doc) => (
            <li
              key={doc.id}
              onClick={() => handleClick(doc)}
              className={`${
                doc.id == choosen ? 'active' : ''
              } cursor-pointer p-1`}
            >
              <div className='flex flex-col pt-2 pl-3'>
                <span className='font-semibold'>{doc.topic}</span>
                <span>chat here</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ResearchDoc;
