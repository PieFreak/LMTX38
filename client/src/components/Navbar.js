import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  let links = [
    {title:"Home", link:"/"},
    {title:"About", link:"/about"},
    {title:"Profile", link:"/profile"},
  ]
  const  [open, setOpen] = useState(false);
  return (
    <nav className="w-screen px-8 md:px-20 py-2 bg-indigo-300 bg-opacity-10 text-indigo-500 md:flex md:items-center">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="md:text-xl text-transparent bg-gradient-to-r bg-clip-text from-green-600 to-indigo-400">
          {/*
          <img 
            className="h-10 inline pr-2"
            src="https://via.placeholder.com/300x150"
            alt="icon"
          ></img>*/ }
          Högskoleprovet
        </NavLink>
        <span className="cursor-pointer mx-2 md:hidden block">
          <button 
            name={open ? "close" : "menu"}
            className="px-2 py-3 flex"
            onClick={()=>setOpen(!open)}
          >
            <div className="gg-menu"></div>
          </button>
        </span>
      </div>
      <ul className={`bg-none md:flex md:items-center md:pb-0 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-10 bg-indigo-50 border-b-2':'top-[-490px] bg-none'}`}>
        {
          links.map(({title, link}) => (
          <li key={title} className={`md:ml-8 md:my-0 my-7 ${link === location.pathname ? "md:border-b-2 md:border-blue-500" : ""}`}>
            <NavLink to={link} className="md:text-sm items-center hover:text-blue-500">
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    )
  }