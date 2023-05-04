import { NavLink } from "react-router-dom"
import {useState, useEffect} from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Button} from "react-bootstrap"

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="vh-100 w-full d-flex flex-column justify-content-center align-items-center bg-light">
      <h1 className="text-primary my-5">
        Högskoleprovet
      </h1>
      <NavLink className="my-5 pt-3 pb-3" to={user ? "/profile" : "/login"}>
        <Button
          variant="light"
          size="lg"
          className="shadow py-3 ps-5 pe-5"
        >
          <h3>Kom igång</h3>
        </Button>
      </NavLink>
      <p className="mx-5 my-5 text-center">
        Ett enklare sätt att öva inför högskoleprovet.
      </p>
      <Footer/>
    </div>
    )
  }