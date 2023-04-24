import {useEffect, useState} from 'react';


export default function Sidebar({sideItems}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rounds, setRounds] = useState();
  const [completeRounds, setCompleteRounds] = useState();

  

  return (
    <div className="flex absolute">
      <div className={`w-64 bg-indigo-100 h-screen ${isOpen && 'hidden'}`}>
      <ul>
        {sideItems.map((sideItem) => (
          <li key={sideItem.id}>
            <a href={`#${sideItem.id}`}>
              {sideItem.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
      <div className={`flex-1 bg-indigo-100 overflow-hidden ${isOpen && "rounded-br-lg"}`}>
        <button 
          className="px-2 py-4"
          onClick={() => setIsOpen(!isOpen)}
        >  
        <i className="gg-menu-left"/>
        </button>
      </div>
    </div>
  )
}