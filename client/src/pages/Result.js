import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

export default function Result() {

    const location = useLocation();
    const game = location.state.game;
    const answers = location.state.answers;
    console.log(game);

    return (
        <div className="min-h-screen flex flex-col justify-center item-center bg-indigo-5">
            <Navbar />
            <div className="w-full mx-auto bg-[#5b6c6c] pb-16">
                <h1 className="pt-12 mb-16 flex justify-center items-center w-full text-white text-2xl md:text-4xl p-2">RESULTAT</h1>
                <div className="py-1 px-2 my-1 w-[16rem] md:w-[22rem] mx-auto grid grid-cols-2 justify-center items-center text-white">
                    <p className="text-center"></p>
                    <p className="text-center text-xs">DITT SVAR</p>
                </div>
                {game.map((question, index) => {
                    const selectedAnswer = answers[index];
                    return (
                        <button key={question.id} className="py-1 px-2 my-1 w-[16rem] md:w-[22rem] mx-auto grid grid-cols-2 justify-center items-center text-white border-r-2 border-b-2 border-gray-600 hover:shadow-sm hover:border-x-2 hover:border-x-cyan-800 shadow-inner">
                            <p className="text-start ">{index + 1}. {question.question}</p>
                            {selectedAnswer !== -1 &&
                                <p className={`text-center my-1 mx-8 border-r-2 border-b-2 border-[#172e1272] ${selectedAnswer !== -1 && question.answers[selectedAnswer].correct ? 'bg-[#26461e72]' : 'bg-red-500'}`}>
                                    {String.fromCharCode(65 + selectedAnswer)}
                                </p>}
                        </button>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}