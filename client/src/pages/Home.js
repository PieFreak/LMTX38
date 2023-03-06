import { NavLink } from "react-router-dom"
import {useState, useEffect} from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center item-center  bg-indigo-50">
      <h1 className="md:mt-8 mt-16 mb-16 py-2 text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-indigo-400 text-4xl md:text-6xl">
        Högskoleprovet
      </h1>
      <NavLink to={user ? "/profile" : "/login"} className="mx-auto mt-20 px-6 py-4 md:px-9 md:py-6 rounded-xl bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800 text-2xl md:text-4xl transition-all duration-300 shadow-2xl hover:shadow-lg">
        <h3>Kom igång</h3>
      </NavLink>
      <h4 className="mx-5 py-20 text-center text-indigo-900 md:text-xl text-lg">
        Ett enklare sätt att öva inför högskoleprovet.
      </h4>
      <Footer/>
    </div>
    
    )
  }