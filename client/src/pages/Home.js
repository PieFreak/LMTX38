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
    <div className="min-h-screen flex flex-col justify-center item-center  bg-white">
      <h1 className="md:mt-8 mt-16 mb-16 py-2 text-center font-bold text-blue-500 text-3xl md:text-4xl">
        Högskoleprovet
      </h1>
      <NavLink to={user ? "/profile" : "/login"} className="mx-auto mt-10 px-10 py-4 border-2 md:px-12 md:py-4 rounded-md bg-white hover:bg-blue-100 text-black font-bold text-xl md:text-2xl transition-all duration-300 shadow-xl hover:shadow-lg">
        <h3>Kom igång</h3>
      </NavLink>
      <h4 className="mx-5 py-20 px-8 text-center text-black md:text-xl text-lg">
        Ett roligare sätt att öva inför högskoleprovet.
      </h4>
      <Footer/>
    </div>
    
    )
  }