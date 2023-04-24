import { NavLink, } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const [user, setUser] = useState(undefined);
  let links = [
    {title:"Start", link:"/gameoverview"},
    {title:"Om 'namn'", link:"/about"},
    {title:"Profil", link:"/profile"},
  ]
  const  [open, setOpen] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <nav className={`z-50 w-screen px-2 md:px-4 py-2 bg-indigo-100 text-indigo-500 md:flex md:items-center ${open && "drop-shadow-2xl md:drop-shadow-none"}`}>
      <div className="flex justify-between items-center">
        <NavLink to="/" className="md:text-xl text-transparent bg-gradient-to-r bg-clip-text from-green-600 to-indigo-400">
          Högskoleprovet
        </NavLink>
        <span className="cursor-pointer mx-2 md:hidden block">
          <button 
            name={open ? "close" : "menu"}
            className="px-2 py-3 flex"
            onClick={()=>setOpen(!open)}
          >
            <div className="gg-menu"/>
          </button>
        </span>
      </div>
      <div className={`z-40 bg-inherit md:flex md:items-center justify-between grow md:pb-0 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? '':'top-[-490px]'}`}>
        <ul className="md:flex">
          {
            links.map(({title, link}) => (
            <li key={title} className={`md:ml-8 md:my-0 my-5`}>
              <NavLink to={link} className="md:text-sm items-center hover:text-blue-500 hover:underline">
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {user ?
          <NavLink to="/" className="flex px-2 py-1 text-sm hover:underline" onClick={async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post('http://localhost:5000/user/logout');
              console.log(response);
              localStorage.clear();
              setUser(undefined);
            } catch (err) {
              console.log(err.message);
            }
            setUser(undefined)
          }}>
            <div className="gg-log-out mr-3 self-center"/> 
            Logga ut
          </NavLink>
          :
          <NavLink to="/login" className="flex px-2 py-1 text-sm hover:underline">
            <div className="gg-log-in mr-3 self-center"/> 
            Logga in 
          </NavLink>
        }
      </div>
    </nav>
    )
  }