import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-no-repeat bg-cover bg-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/05/H%C3%B6gskoleprovets_fr%C3%A5geformul%C3%A4r.jpg')] z-[-10]">
      <Navbar/>
      <NavLink to='/entry' className="mx-auto mt-20 px-10 py-6 md:px-16 md:py-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-2xl md:text-4xl transition-all duration-150">
        Kom igång!
      </NavLink>
      <Footer/>
    </div>
    )
  }