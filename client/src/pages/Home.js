import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="h-screen flex justify-center flex-col bg-no-repeat bg-cover bg-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/05/H%C3%B6gskoleprovets_fr%C3%A5geformul%C3%A4r.jpg')]">
      <NavLink to='/entry' className="mx-auto px-10 md:px-16 py-6 md:py-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-2xl md:text-4xl">
        Kom igång!
      </NavLink>
    </div>
    )
  }