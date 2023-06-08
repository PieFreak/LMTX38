import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import validator from 'validator'
import Footer from "../components/Footer";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passConfirmError, setPassConfirmError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasError = false;

    if(!validator.isEmail(email)){
      setEmailError("Felaktig e-post");
      hasError = true;
    }
    if (!validator.matches(username, "^[a-zA-Z0-9_.-]*$") || username.length < 8) {
      setUsernameError("Användarnamnet måste innehålla 8 tecken och får endast bestå av små- & stora bokstäver och siffror");
      hasError = true;
    }
    //TODO password validator--
    if (password !== confirmPassword) {
      setPassConfirmError("'Lösenord' stämmer ej överens med 'Bekräfta Lösenord'");
      hasError = true;
    }

    if(hasError){
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/user/', { email, password, username });
      setIsSubmitted(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  };


  return (
    <>
    {isSubmitted ? (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div>
          <p className="py-2 text-center  text-base md:text-2xl">Registrering lyckades!</p>
          <NavLink to="/login">
            <h3 className="text-center mx-auto mt-20 px-6 py-4 md:px-9 md:py-6 rounded-xl hover:bg-indigo-200 border-2 border-indigo-200 text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-indigo-400 text-base md:text-2xl transition-all duration-300 shadow-2xl hover:shadow-lg">
              Logga in
            </h3>
          </NavLink>
        </div>
      </div>
      ) : (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <NavLink to="/" className="md:mt-8 mt-16 mb-16">
        <h1 className="py-2 text-center font-extrabold text-blue-500 text-2xl md:text-5xl">
          Högskoleprovet
        </h1>
      </NavLink>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-2 w-40 md:w-60 my-10 md:my-4">
        <input
          name="epost"
          className="p-1 border-2 rounded-sm"
          type="text"
          autoFocus
          required
          placeholder="E-post"
          onChange={e => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        {emailError && <span className="text-xs text-red-700"> {emailError} </span>}
        <input
          name="username"
          className="p-1 border-2 rounded-sm" 
          type="text"
          required
          placeholder="Användarnamn"
          onChange={e => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        {usernameError && <span className="text-xs text-red-700"> {usernameError} </span>}
        <input 
          name="password"
          className="p-1 border-2 rounded-sm" 
          type={showPassword ? "text":"password"} 
          required
          placeholder="Lösenord" 
          onChange={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <input 
          name="password"
          className="p-1 border-2 rounded-sm" 
          type={showPassword ? "text":"password"}
          required
          placeholder="Bekräfta Lösenord" 
          onChange={e => {
            e.preventDefault();
            setConfirmPassword(e.target.value);
          }}
        />
        {passConfirmError && <span className="text-xs text-red-700"> {passConfirmError} </span>}
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
          Skapa Konto
        </button>
      </form>
      <Footer/>
    </div>
    )}
</>
    )
  }

  