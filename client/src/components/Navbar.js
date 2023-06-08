import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  let links = [
    {title:"Start", link:"/gameoverview"},
    {title:"Om högskoleprovet", link:"/about"},
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
    <nav className={`z-50 w-screen lg:px-4 py-2 bg-gray-100 lg:flex lg:items-center ${open && "drop-shadow-2xl lg:drop-shadow-none"}`}>
      <div className="ml-8 md:ml-32 flex justify-between items-center">
        <NavLink to="/" className="lg:text-lg text-blue-500 ">
          Högskoleprovet
        </NavLink>
        <span className="cursor-pointer mx-2 lg:hidden block md:block">
          <button 
            name={open ? "close" : "menu"}
            className="px-2 py-3 flex"
            onClick={()=>setOpen(!open)}
          >
            <div className="mr-2 md:mr-20 gg-menu"/>
          </button>
        </span>
      </div>
      <div className={`ml-4 mr-40 z-40 bg-inherit lg:flex lg:items-center justify-between grow lg:pb-0 absolute lg:static lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 ${open ? '':'top-[-490px]'}`}>
        <ul className="lg:flex">
          {
            links.map(({title, link}) => (
            <li key={title} className={`lg:ml-4 lg:my-0 my-5`}>
              <NavLink to={link} className="lg:text-sm text-gray-600 items-center hover:text-blue-500 hover:underline">
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
              navigate("/");
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
            <div className="gg-log-in t mr-3 self-center"/> 
            Logga in 
          </NavLink>
        }
      </div>
    </nav>
    )
  }