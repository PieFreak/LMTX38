import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Register() {
  const navigate = useNavigate();
  const [mailAddress, setMailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-50">
      <NavLink to="/" className="md:mt-8 mt-16 mb-16">
        <h1 className="py-2 text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-indigo-400 text-4xl md:text-6xl">
          Högskoleprovet
        </h1>
      </NavLink>
      <form className="flex flex-col gap-2 mx-2 w-40 md:w-60 my-10 md:my-4">
        <input
          name="epost"
          className="p-1" 
          type="text"
          autoFocus
          placeholder="E-post"
          onChange={e => {
            e.preventDefault();
            setMailAddress(e.target.value);
          }}
        />
        <input
          name="username"
          className="p-1" 
          type="text"
          placeholder="Användarnamn"
          onChange={e => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <input 
          name="password"
          className="p-1" 
          type={showPassword ? "text":"password"} 
          placeholder="Lösenord" 
          onChange={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <input 
          name="password"
          className="p-1" 
          type={showPassword ? "text":"password"} 
          placeholder="Bekräfta Lösenord" 
          onChange={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <div className="flex px-2 gap-2">
          <input
          id="show-password"
          type="checkbox"
          onChange={e => {
            setShowPassword(!showPassword);
          }}
          />
          <label className="text-xs" htmlFor="show-password">Visa Lösenord</label>
        </div>
        <button className="shadow-xl p-1 bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800" onClick={e => {
          e.preventDefault();
          navigate("/register")
        }}>
          Skapa Konto
        </button>
      </form>
      <Footer/>
    </div>
    )
  }

  