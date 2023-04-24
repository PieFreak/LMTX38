import {useEffect, useState} from 'react';


export default function Sidebar({sideItems}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rounds, setRounds] = useState();
  const [completeRounds, setCompleteRounds] = useState();

  

  return (  
    <div className="flex absolute z-0">
      <div className={`pl-5 pt-3 w-52 bg-indigo-100 h-screen ${isOpen && 'hidden'}`}>
      <ul className='flex flex-col gap-3 list-disc'>
        {sideItems.map((sideItem) => (
          <li key={sideItem.id}>
            <a className=" hover:border-b-2 hover:border-b-gray-400 hover:font-extrabold transition-all duration-100" href={`#${sideItem.id}`}>
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