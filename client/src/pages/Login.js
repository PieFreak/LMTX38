import { NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-50">
      <h1 className="my-16 py-2 text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-indigo-400 text-3xl md:text-6xl">
        Högskoleprovet
      </h1>
      <form className="flex flex-col gap-2 mx-2 w-40 md:w-60 my-10 md:my-4">
        <input
          name="username"
          className="p-1" 
          type="text"
          autoFocus
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
        <div className="flex px-2 gap-2">
          <input
          name="show-password"
          type="checkbox"
          onChange={e => {
            setShowPassword(!showPassword);
          }}
          />
          <label className="text-xs" htmlFor="show-password">Visa Lösenord</label>
        </div>
        <button className="shadow-xl p-1 bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800" onClick={e => {
          e.preventDefault();
          console.log(`Username: ${username}\nPassword: ${password}`);
        }}>
          Logga in
        </button>
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

  