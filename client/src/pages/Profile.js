import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Button } from "react-bootstrap";

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
      <div className="vh-screen bg-white">
        <Navbar />
        <div className="d-flex align-items-center flex-column gap-4">
          <div className="mt-5">Du måste logga in för att se profil!</div>
          <Button variant="secondary" href="/login">Logga in</Button>
        </div>
      </div>
    )
  }
  return (
    <div className="min-vh-100 bg-white">
      <Navbar />
      <Sidebar sideItems={[{ id: "user", title: "Användare" }, { id: "rounds", title: "Egna rundor" }, { id: "completerounds", title: "Gästrundor" }]} />
      <div className="d-flex">
        <div className="d-flex flex-column mx-auto my-5 mx-2 mt-5 p-3 bg-light border border-gray-200 shadow w-80 rounded">
          <div className="border-bottom border-primary mb-3 pb-1">
            <h2 id="user" className="h5 mb-1">Användare</h2>
            <p className="small">Du är inloggad som {user.username}</p>
          </div>
          <div className="border-bottom border-primary mb-3 pb-1">
            <h2 id="rounds" className="h5 mb-1">Egna rundor</h2>
            <div className="d-flex flex-column gap-2 mt-2">
              {rounds && rounds.map(round => {
                const jsDate = new Date(round.date);
                const day = jsDate.getDate();
                const month = jsDate.getMonth() + 1;
                const year = jsDate.getFullYear();
                return (
                  <div key={round.id} className="border rounded p-2">
                    <div className="d-flex justify-content-between">
                      <span className="small">{`ID: ${round.id.substring(0, 5)}...`}</span>
                      <span className="small">{`Poäng: ${round.ownerscore}`}</span>
                    </div>
                    <div className="small">{`Datum: ${day}/${month}/${year}`}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="border-bottom border-primary mb-3 pb-1">
            <h2 id="completerounds" className="h5 mb-1">Gästrundor</h2>
          </div>
        </div>
      </div>
    </div>
  )
}