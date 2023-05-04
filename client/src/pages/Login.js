import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
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
      if (error.response.status === 401) {
        console.log("INVALID")
      } else {
        console.error(error.message);
      }
    }
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [])
  if (user) {
    <div>
      <div>You are already logged in!</div>
      <a href="/">Go back</a>
    </div>
  }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavLink to="/" className="text-decoration-none my-5">
        <h1 className="text-center">
          Högskoleprovet
        </h1>
      </NavLink>

      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column mt-3 mx-auto gap-1"
      >
        <Form.Control
          name="username"
          required
          type="text"
          placeholder="Användarnamn"
          onChange={e => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <Form.Control
          name="password"
          required
          type={showPassword ? "text" : "password"}
          placeholder="Lösenord"
          onChange={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <Form.Group className="d-flex gap-1">
          <Form.Check
            name="show-password"
            type="checkbox"
            onChange={() => {
              setShowPassword(oldShowPassword => !oldShowPassword);
            }}
          />
          <Form.Label>Visa Lösenord</Form.Label>
        </Form.Group>
        <Button type="submit">Logga in</Button>
        <Button onClick={e => {
          e.preventDefault();
          navigate("/register");
        }}>
          Skapa Konto
        </Button>
      </Form>
      
        {/* // <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-2 w-40 md:w-60 my-10 md:my-4">
        //   <input
        //     name="username"
        //     className="p-1"
        //     type="text"
        //     autoFocus
        //     placeholder="Användarnamn"
        //     onChange={e => {
        //       e.preventDefault();
        //       setEmail(e.target.value);
        //     }}
        //   />
        //   <input 
        //     name="password"
        //     className="p-1" 
        //     type={showPassword ? "text":"password"} 
        //     placeholder="Lösenord" 
        //     onChange={e => {
        //       e.preventDefault();
        //       setPassword(e.target.value);
        //     }}
        //   />
        //   <div className="flex px-2 gap-2">
        //     <input
        //     name="show-password"
        //     type="checkbox"
        //     onChange={e => {
        //       setShowPassword(!showPassword);
        //     }}
        //     />
        //     <label className="text-xs" htmlFor="show-password">Visa Lösenord</label>
        //   </div>
        //   <button type="submit" className="shadow-xl p-1 bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800">
        //     Logga in
        //   </button>
        //   <button className="shadow-xl p-1 bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 text-indigo-800" onClick={e => {
        //     e.preventDefault();
        //     navigate("/register")
        //   }}>
        //     Skapa Konto
        //   </button>
        // </form> */}
        
      <Footer />
    </div>
  )
}

