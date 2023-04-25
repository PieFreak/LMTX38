import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="true"
      size="lg"
      className="setting-popup"
    >
      <Modal.Body className="border border-4 border-info border-opacity-75" closeButton>
        <Modal.Title className="w-100 text-center">{title}</Modal.Title>
        <h3 className="fs-5 mx-2 mb-4 text-center">{text}</h3>
        <p className="my-4 text-center fs-6">
          Välj antal frågor omgången ska innehålla
        </p>
        <div className="mx-auto d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 my-2">
          { /* Add buttons for selecting the amount here */}
          <Button
            variant={`outline-secondary px-3 btn-sm ${selectedButton === 5 ? "bg-info bg-opacity-25" : " bg-opacity-50"
              }`}
            onClick={() => handleAmountOption(5)}
          >
            5
          </Button>
          <Button
            variant={`outline-secondary px-3 btn-sm ${selectedButton === 10 ? "bg-info bg-opacity-25" : " bg-white"
              }`}
            onClick={() => handleAmountOption(10)}
          >
            10
          </Button>
          <Button
            variant={`outline-secondary px-3 btn-sm ${selectedButton === 20 ? "bg-info bg-opacity-25" : " bg-white"
              }`}
            onClick={() => handleAmountOption(20)}
          >
            20
          </Button>
        </div>

        <Button
          variant="outline-dark px-4 py-3 mt-4 btn-lg text-danger border border-1 border-opacity-50 border-muted mx-auto mb-4 d-flex justify-content-center"
          onClick={startGame}
        >
          Start Game
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SettingPopup;
