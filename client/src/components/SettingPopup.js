import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SettingPopup = ({ title, text, show, onClose }) => {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState(20);

  const handleAmountOption = (amount) => {
    setSelectedButton(amount);
  };

  const startGame = async () => {
    try {
      const amount = parseInt(selectedButton);
      const response = await axios.post("http://localhost:5000/game/", {
        questionType: title,
        questionAmount: amount,
      });
      /* console.log(response.data); */
      navigate("/gameplay", { state: { game: response.data } });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  if (!show) return null;

  return (
    <div onClick={() => { onClose(); setSelectedButton(20); }} className="position-fixed d-flex justify-content-center align-items-center w-100 h-100">

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white z-n5 position-absolute border border-primary rounded mx-auto shadow-lg bg-light d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-8 col-lg-6"
        >
        <button
          onClick={() => {
            onClose();
            setSelectedButton("20");
          }}
          className="position-absolute top-0 start-0 p-2 btn btn-close"
        ></button>
        <div className="w-100">
          <h1 className="text-primary fs-1 mt-4 mb-4 text-center">{title}</h1>
          <h3 className="text-secondary mx-4 mb-4 text-center">{text}</h3>
          <p className="my-4 text-center">
            Välj antal frågor omgången ska innehålla
          </p>
          <div className="mx-auto d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 my-2">
            <button
              className={`btn btn-outline-secondary px-4 ${
                selectedButton === 5 ? "bg-primary text-white" : " bg-white"
              }`}
              onClick={() => handleAmountOption(5)}
            >
              5
            </button>
            <button
              className={`btn btn-outline-secondary px-4 ${
                selectedButton === 10 ? "bg-primary text-white" : " bg-white"
              }`}
              onClick={() => handleAmountOption(10)}
            >
              10
            </button>
            <button
              className={`btn btn-outline-secondary px-4 ${
                selectedButton === 20 ? "bg-primary text-white" : " bg-white"
              }`}
              onClick={() => handleAmountOption(20)}
            >
              20
            </button>
            <button
              className={`btn btn-outline-secondary px-4 ${
                selectedButton === 30 ? "bg-primary text-white" : " bg-white"
              }`}
              onClick={() => handleAmountOption(30)}
            >
              30
            </button>
            <button
              className={`btn btn-outline-secondary px-4 ${
                selectedButton === 40 ? "bg-primary text-white" : " bg-white"
              }`}
              onClick={() => handleAmountOption(40)}
            >
              40
            </button>
          </div>
          <button
            onClick={startGame}
            className="btn btn-primary mx-auto mb-4 d-flex justify-content-center"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default SettingPopup;
