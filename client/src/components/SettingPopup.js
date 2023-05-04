import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SettingPopup = ({ title, text, show, onClose }) => {

    const navigate = useNavigate();

    const [selectedButton, setSelectedButton] = useState(10);

    const handleAmountOption = (amount) => {
        setSelectedButton(amount);
    }

    const startGame = async () => {
        try {
            const amount = parseInt(selectedButton);
            const response = await axios.post('http://localhost:5000/game/', {
                questionType: title,
                questionAmount: amount
            });
            navigate('/gameplay', { state: { game: response.data } });
        } catch (error) {
            console.error(error.response.data);
        }
    };

    if (!show) return null

    return (
        <div onClick={() => { onClose(); setSelectedButton(10); }} className="bg-gray-800 bg-opacity-30 fixed flex justify-center items-center w-full h-full">
            <div onClick={(e) => { e.stopPropagation(); }} className="w-[16rem] border-4 border-teal-400 md:mx-auto lg:mx-auto md:w-[36rem] lg:w-[40rem] max-w-3xl top-20 md:top-56 shadow-2xl shadow-black h-auto md:h-96 bg-gradient-to-b from-white via-[#f2edf1] to-indigo-50 fixed flex items-center justify-center">
                <button onClick={() => { onClose(); setSelectedButton("10"); }} className="absolute top-0 left-0 pt-1 px-2 hover:bg-teal-200 hover:shadow-inner">X</button>
                <div className="h-full">
                    <h1 className="text-2xl mt-6 mb-4 text-center">{title}</h1>
                    <h3 className="text-sm md:text-lg mx-4 md:mx-20 mb-4 md:mb-8 text-center">{text}</h3>
                    <p className="mx-4 mt-8 mb-4 text-sm text-center">Välj antal frågor omgången ska innehålla</p>
                    <div className="mx-auto flex flex-row items-center justify-center space-x-2 md:space-x-4 my-2">
                        <button className={`flex justify-center items-center rounded-md text-xs md:text-base border-2 w-10 h-6 md:h-8 md:w-12 border-gray-400 md:px-4 ${selectedButton === 5 ? 'bg-teal-100' : ' bg-white'}`} onClick={() => handleAmountOption(5)}>5</button>
                        <button className={`flex justify-center items-center rounded-md text-xs md:text-base border-2 w-10 h-6 md:h-8 md:w-12 border-gray-400 md:px-4 ${selectedButton === 10 ? 'bg-teal-100' : ' bg-white'}`} onClick={() => handleAmountOption(10)}>10</button>
                        <button className={`flex justify-center items-center rounded-md text-xs md:text-base border-2 w-10 h-6 md:h-8 md:w-12 border-gray-400 md:px-4 ${selectedButton === 20 ? 'bg-teal-100' : ' bg-white'}`} onClick={() => handleAmountOption(20)}>20</button>
                    </div>
                    <button onClick={startGame} className="mx-auto mb-4 mt-4 md:mt-6 lg:mt-10 flex justify-center items-center w-24 md:w-40 border-2 bg-[#ffffff] hover:bg-[#a8dfe618] border-gray-400 transition-all duration-300 rounded-md">
                        <h2 className="text-small md:text-base m-2 md:m-4 anim-textAppear text-[#ac1d1d] ">Starta</h2>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default SettingPopup

