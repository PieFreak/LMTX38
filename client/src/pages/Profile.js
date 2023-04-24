import {useState, useEffect} from "react";
import axios from 'axios';

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
      <div className="min-h-screen bg-indigo-50 flex flex-col">
        <Navbar/>
        <div className="self-center mt-16">Du måste logga in för att se profil!</div>
        <a className="self-center underline border-2 border-red-300 bg-red-100 hover:bg-opacity py-2 px-12 font-extrabold mt-20" href="/login">Logga in</a>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar/>
        <div className="flex">
        <Sidebar sideItems={[{id: "user", title: "Användare"},{id: "rounds", title: "Egna rundor"},{id: "completerounds", title: "Gäst rundor"}]}/>
        <div className="flex flex-col mx-auto my-5 p-5 bg-indigo-100 border-2 border-gray-200 shadow-2xl w-[20rem] rounded-md">
          <div className="border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="user" className="text-lg mb-1">Användare</h2>
            <p className="text-xs">Du är inloggad som {user.username}</p>
          </div>
          <div className="border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="rounds" className="text-lg mb-1">Egna rundor</h2>
            <div className="flex flex-col gap-2 mt-2">
              {rounds && rounds.map(round => {
                const jsDate = new Date(round.date);
                const day = jsDate.getDate();
                const month = jsDate.getMonth()+1;
                const year = jsDate.getFullYear();
                return (
                  <div key={round.id} className="border rounded-md p-2">
                    <div className="flex justify-between">
                      <span className="text-sm">{`ID: ${round.id.substring(0, 5)}...`}</span>
                      <span className="text-sm">{`Poäng: ${round.ownerscore}`}</span>
                    </div>
                    <div className="text-sm">{`Datum: ${day}/${month}/${year}`}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="completerounds" className="text-lg mb-1">Gästrundor</h2>
          </div>
        </div>
      </div>
    </div>
    )
  }