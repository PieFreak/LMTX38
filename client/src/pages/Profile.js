import { useState, useEffect } from "react";
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
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="self-center mt-16 text-black">Du måste logga in för att se profil!</div>
        <a className="self-center underline border-2 border-red-300 bg-red-100 hover:bg-opacity py-2 px-12 font-extrabold mt-20" href="/login">Logga in</a>
      </div>
    )
  }
  return (
    <div className="min-h-screen text-black bg-white">
      <Sidebar sideItems={[{ id: "user", title: "Användare" }, { id: "rounds", title: "Egna rundor" }, { id: "completerounds", title: "Gästrundor" }]} />
      <Navbar />
      <div className="flex">
        <div className="flex flex-col md:mx-auto my-5 mx-2 mt-16 p-5 bg-gray-100 border-2 border-gray-200 shadow-2xl w-[30rem] rounded-md">
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
                const month = jsDate.getMonth() + 1;
                const year = jsDate.getFullYear();
                return (
                  <div key={round.id} className="flex flex-col border rounded-md p-2 gap-1">
                    <div className="flex justify-between">
                      <span className="text-sm">{`ID: ${round.id.substring(0, 5)}...`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-left">{`Poäng: ${round.score}`}</span>
                      <span className="text-sm text-right">{`Spelades: ${day}/${month}/${year}`}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1 border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="completerounds" className="text-lg mb-1">Gästrundor</h2>
            {completeRounds && completeRounds.map(round => {
              const yourDate = new Date(round.roundchallengedate);
              const opponentsDate = new Date(round.rounddate);
              return (
                <div key={round.id} className="flex flex-col border rounded-md p-2 gap-1">
                  <div className="flex justify-between">
                    <span className="text-sm">{`ID: ${round.id.substring(0, 5)}...`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-left">{`Dina poäng: ${round.opponentscore}`}</span>
                    <span className="text-sm text-right">{`Spelades: ${yourDate.getDate()}/${yourDate.getMonth()+1}/${yourDate.getFullYear()}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-left">{`Motståndare poäng: ${round.score}`}</span>
                    <span className="text-sm text-right">{`Spelades: ${opponentsDate.getDate()}/${opponentsDate.getMonth()+1}/${opponentsDate.getFullYear()}`}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}