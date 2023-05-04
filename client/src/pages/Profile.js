import {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {Button} from "react-bootstrap";

export default function Profile() {
  const [user, setUser] = useState();
  const [rounds, setRounds] = useState();
  const [completeRounds, setCompleteRounds] = useState();

  async function getRounds() {
    try {
      const response = await axios.get('http://localhost:5000/user/round/');
      console.log(response.data)
      setRounds(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getCompleteRounds() {
    try {
      const response = await axios.get('http://localhost:5000/user/round/complete');
      console.log(response.data)
      setCompleteRounds(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      getRounds();
      getCompleteRounds();
    }
  }, []);
  if (user == null) {
    return (
      <div className="min-h-screen bg-indigo-50">
        <Navbar/>
        <div className="d-flex align-items-center flex-column gap-4">
          <div className="mt-5">Du måste logga in för att se profil!</div>
          <Button variant="secondary" href="/login">Logga in</Button>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen  bg-indigo-50">
      <Navbar/>
      <div className="d-flex align-items-center flex-column">
          
      </div>
    </div>
    )
  }