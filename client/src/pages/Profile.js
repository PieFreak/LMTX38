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
  
  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar/>
      {
        user ? 
        <div className="flex">
        <Sidebar sideItems={[{id: "user", title: "User"}]}/>
        <div className="flex flex-col mx-auto my-5 p-5 bg-indigo-200">
          <div className="border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="user" className="text-lg mb-1">User {}</h2>
            <p className="text-xs">Change username, some information about account</p>
          </div>
          <div className="border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="rounds" className="text-lg mb-1">Rounds</h2>
            <div>
              {rounds && rounds.map(round => {
                const jsDate = new Date(round.date);
                const day = jsDate.getDate();
                const month = jsDate.getMonth();
                const year = jsDate.getFullYear();
                return (
                  <div key={round.id}>
                    {`ID: ${round.id}`} <br/>
                    {`Date: ${day}/${month}/${year}`}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="border-b-2 border-indigo-900 mb-5 pb-2">
            <h2 id="completerounds" className="text-lg mb-1">Complete Rounds</h2>
          </div>
        </div>
      </div>
      :
      <div>You are not logged in!</div>
    }
    </div>
    )
  }