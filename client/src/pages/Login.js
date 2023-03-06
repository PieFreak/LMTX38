import { NavLink, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import Footer from "../components/Footer";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login/', { email, password });
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate('/profile')
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [])

  return (
    user ?
      <div>
        <div>You are already logged in!</div>
        <a href="/">Go back</a>
      </div>
    :
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-50">
      <NavLink to="/" className="md:mt-8 mt-16 mb-16">
        <h1 className="py-2 text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-indigo-400 text-4xl md:text-6xl">
          Högskoleprovet
        </h1>
      </NavLink>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-2 w-40 md:w-60 my-10 md:my-4">
        <input
          name="username"
          className="p-1" 
          type="text"
          autoFocus
          placeholder="Användarnamn"
          onChange={e => {
            e.preventDefault();
            setEmail(e.target.value);
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
        <button type="submit" className="shadow-xl p-1 bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800">
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

  