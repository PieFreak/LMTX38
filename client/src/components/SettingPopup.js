import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SettingPopup = ({ title, text, show, onClose }) => {

    const navigate = useNavigate();

    const [selectedButton, setSelectedButton] = useState(20);

    const handleAmountOption = (amount) => {
        setSelectedButton(amount);
    }

    const startGame = async () => {
        try {
            const amount = parseInt(selectedButton);
            const response = await axios.post('http://localhost:5000/game/', {
                questionType: title,
                questionAmount: amount
            }, { withCredentials: true });
            navigate('/gameplay', { state: { game: response.data } });
        } catch (error) {
            console.error(error.response.data);
        }
    };

    if (!show) return null

    return (
        <div onClick={() => { onClose(); setSelectedButton(20); }} className="bg-gray-800 bg-opacity-30 fixed flex justify-center items-center w-full h-full">
            <div onClick={(e) => { e.stopPropagation(); }} className="w-11/12 max-w-3xl top-20 md:top-56 shadow-2xl shadow-black h-auto md:h-96 bg-indigo-50 rounded-2xl fixed flex items-center justify-center">
                <button onClick={() => { onClose(); setSelectedButton("20"); }} className="absolute rounded-2xl top-0 left-0 pt-2 px-2 hover:bg-inherit hover:border-2 hover:shadow-black hover:shadow-2xl">X</button>
                <div className="h-full">
                    <h1 className="text-3xl mt-8 mb-4 text-center">{title}</h1>
                    <h3 className="text-sm md:text-xl mx-8 md:mx-32 mb-8 text-center">{text}</h3>
                    <p className=" my-4 text-xs text-center">Välj antal frågor omgången ska innehålla</p>
                    <div className="mx-auto flex flex-row items-center justify-center space-x-2 md:space-x-10 mb-4">
                        <button className={`text-xs md:text-base border-2 px-1 md:px-4 md:m-2 ${selectedButton === 5 ? 'bg-indigo-200' : ' bg-white'}`} onClick={() => handleAmountOption(5)}>5</button>
                        <button className={`text-xs md:text-base border-2 px-1 md:px-4 md:m-2 ${selectedButton === 10 ? 'bg-indigo-200' : ' bg-white'}`} onClick={() => handleAmountOption(10)}>10</button>
                        <button className={`text-xs md:text-base border-2 px-1 md:px-4 md:m-2 ${selectedButton === 20 ? 'bg-indigo-200' : ' bg-white'}`} onClick={() => handleAmountOption(20)}>20</button>
                        <button className={`text-xs md:text-base border-2 px-1 md:px-4 md:m-2 ${selectedButton === 30 ? 'bg-indigo-200' : ' bg-white'}`} onClick={() => handleAmountOption(30)}>30</button>
                        <button className={`text-xs md:text-base border-2 px-1 md:px-4 md:m-2 ${selectedButton === 40 ? 'bg-indigo-200' : ' bg-white'}`} onClick={() => handleAmountOption(40)}>40</button>
                    </div>
                    <button onClick={startGame} className="mb-2 mx-auto flex justify-center items-center w-24 md:w-40 border-2 bg-[#ffffff] hover:bg-[#75969a50] border-indigo-200 transition-all duration-300 rounded-md">
                        <h2 className="font-extrabold text-small md:text-base m-2 md:m-4 anim-textAppear text-[#ac1d1d] ">Starta</h2>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default SettingPopup

