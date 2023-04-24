import { NavLink } from "react-router-dom"
import {useState, useEffect} from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div class="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
  <h1 class="mt-md-5 mb-md-5 mt-3 mb-3 py-2 text-center font-weight-bold text-white bg-gradient bg-gradient-success text-4xl">
    Högskoleprovet
  </h1>
  <a href="<?php echo $user ? '/profile' : '/login'; ?>" class="mx-auto mt-5 px-4 py-3 rounded-lg bg-lightblue hover-bg-lightblue-500 border-2 border-lightblue text-darkblue text-2xl md:text-4xl transition-shadow duration-300 shadow-lg hover-shadow-xl">
    <h3>Kom igång</h3>
  </a>
  <h4 class="mx-5 my-5 text-center text-dark">
    Ett enklare sätt att öva inför högskoleprovet.
  </h4>
  <footer>
    <div class="container-fluid text-center text-dark pt-4 pb-4">
      <small>&copy; 2023 Högskoleprovet</small>
    </div>
  </footer>
</div>

    )
  }