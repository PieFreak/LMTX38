import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

export default function Result() {
    const location = useLocation();
    const [roundID, setRoundID] = useState();
    const [game, setGame] = useState();
    const [answered, setAnswered] = useState();    

    useEffect(()=> {
        setRoundID(location.state.roundID);
        setGame(location.state.game);
        setAnswered(location.state.answered);
    }, []);
    return (
        <div className="min-h-screen flex flex-col justify-center item-center bg-indigo-5">
            <Navbar/>
            <div className="w-full mx-auto bg-[#5b6c6c] pb-16 px-4">
                <h1 className="pt-12 mb-16 flex justify-center items-center w-full text-white text-2xl md:text-4xl p-2">RESULTAT</h1>
                <div className="flex flex-col text-white gap-2">
                    {game.map(question => {
                        return (
                            <button className='flex border-2'>
                                <span>Question: {question.question}</span>
                                {question.answers.map((answer, index) => {
                                    return (
                                        <span className={`pl-2 ${answer.correct && "font-bold"}`}><br/>Answer {index+1}: {answer.answer}</span>
                                    )
                                })}
                            </button>
                        )
                    })}
                </div>

                

            </div>
            <Footer/>
        </div>
    );
}