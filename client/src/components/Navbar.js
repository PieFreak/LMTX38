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
    <nav className="p-5 bg-white text-blue-600 shadow md:flex md:items-center">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-2xl cursor-pointer">
          <img 
            className="h-10 inline pr-2"
            src="https://via.placeholder.com/300x150"
            alt="icon"
          ></img>
          Övningsapp.
        </NavLink>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <button 
            name={open ? "close" : "menu"}
            className="px-2 py-3 flex"
            onClick={()=>setOpen(!open)}
          >
            <div className="gg-menu"></div>
          </button>
        </span>
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          links.map(({title, link}) => (
          <li key={title} className={`md:ml-8 text-xl md:my-0 my-7 ${link === location.pathname ? "border-b-2 border-blue-500" : ""}`}>
            <NavLink to={link} className="text-xl hover:text-blue-500">
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    )
  }