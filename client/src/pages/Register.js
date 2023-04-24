import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import validator from 'validator'
import Footer from "../components/Footer";
import {Form, Button} from "react-bootstrap"

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
    <div className="min-vh-100 d-flex flex-column">
        <NavLink to="/" className="text-decoration-none my-5">
          <h1 className="text-center">
            Högskoleprovet
          </h1>
        </NavLink>
      {isSubmitted ?
        <div className="d-flex flex-column align-items-center">
          <p>Registrering lyckades!</p>
          <NavLink to="/login">Logga in</NavLink>
        </div>
      :
        <Form 
          onSubmit={handleSubmit}
          className="d-flex flex-column mt-3 mx-auto px-5 gap-1"
        >
          <Form.Control
            name="epost"
            required
            type="text"
            placeholder="E-post"
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          {emailError && <Form.Label className="fs-6 text-danger text-wrap">{emailError}</Form.Label>}
          <Form.Control
            name="username"
            required
            type="text"
            placeholder="Användarnamn"
            onChange={e => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
          {usernameError && <Form.Label className="fs-6 text-danger">{usernameError}</Form.Label>}
          <Form.Control
            name="password"
            required
            type={showPassword ? "text":"password"} 
            placeholder="Lösenord"
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          {passwordError && <Form.Label className="fs-6 text-danger">{passwordError}</Form.Label>}
          <Form.Control
            name="confirmpassword"
            required
            type={showPassword ? "text":"password"}
            placeholder="Bekräfta Lösenord"
            onChange={e => {
              e.preventDefault();
              setConfirmPassword(e.target.value);
            }}
          />
          {passConfirmError && <Form.Label className="fs-6 text-danger text-wrap">{passConfirmError}</Form.Label>}
          <Form.Group className="d-flex gap-1">
            <Form.Check
              name="show-password"
              type="checkbox"
              onChange={() =>{
                setShowPassword(oldShowPassword => !oldShowPassword);
              }}
            />
            <Form.Label>Visa Lösenord</Form.Label>
          </Form.Group>
          <Button type="submit">Skapa Konto</Button>
        </Form>
      }
      <Footer/>
    </div>
  )
}

  