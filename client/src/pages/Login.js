import { NavLink, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import Footer from "../components/Footer";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms))
  const [showPreload, setShowPreload] = useState(false);
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login/', { email, password });
      localStorage.setItem("user", JSON.stringify(response.data));
      setShowPreload(true);
      await delay(500);
      navigate('/gameoverview')
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <NavLink to="/" className="md:mt-8 mt-16 mb-16">
        <h1 className="py-2 text-center font-semibold text-blue-500 text-2xl md:text-5xl">
          Högskoleprovet
        </h1>
      </NavLink>
      { !showPreload ? 
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-2 w-40 md:w-60 my-10 md:my-4">
          <input
            name="email"
            className="p-1 border-2 rounded-sm" 
            type="text"
            autoFocus
            placeholder="E-post"
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <input 
            name="password"
            className="p-1 border-2 rounded-sm" 
            type={showPassword ? "text":"password"} 
            placeholder="Lösenord" 
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
          <button type="submit" className="rounded-md shadow-xl p-1 bg-blue-500 hover:bg-blue-300 text-white">
            Logga in
          </button>
          <button className="rounded-md shadow-xl p-1 bg-blue-500 hover:bg-blue-300 text-white" onClick={e => {
            e.preventDefault();
            navigate("/register")
          }}>
            Skapa Konto
          </button>
        </form>
        :
        <div className=" absolute  gg-spinner bg-inherit flex flex-col justify-center items-center"/>
        }
      <Footer/>
    </div>
    )
  }

  