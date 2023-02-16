import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="h-full min-h-screen flex flex-col  bg-indigo-50">
      <h1 className="flex items-center justify-center my-2 pt-10 pb-5 text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-indigo-400 text-3xl sm:text-5xl md:text-6xl">
        Högskoleprovet
      </h1>
      <NavLink to='/entry' className="mx-auto mt-20 px-6 py-4 md:px-9 md:py-6 rounded-xl bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800 text-2xl md:text-4xl transition-all duration-300 shadow-2xl hover:shadow-lg">
        <h3>Kom igång</h3>
      </NavLink>
      <h4 className="flex items-center justify-center mx-5 py-20 text-center text-indigo-900 text-base md:text-l">
        Ett enklare sätt att öva inför högskoleprovet.
      </h4>
      <Footer/>
    </div>
    
    )
  }