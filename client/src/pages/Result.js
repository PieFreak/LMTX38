import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import axios from "axios";


export default function Result() {

    const location = useLocation();
    const [roundID, setRoundID] = useState();
    const [game, setGame] = useState();
    const [answered, setAnswered] = useState();
    const [score, setScore] = useState();
    const creatorUser = location.state.creatorUser;
    const creatorScore = location.state.creatorScore;
    const [outcome, setOutcome] = useState();
    const [expand, setExpand] = useState([]);
    console.log(answered);
    const handleExpand = (index) => {
        setExpand((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    useEffect(() => {
        setRoundID(location.state.roundID);
        setGame(location.state.game);
        setAnswered(location.state.answered);
        setScore(location.state.score);
        if (creatorScore != null) {
            if (score === creatorScore) {
                setOutcome("Oavgjort! ");
              } else if (score > creatorScore) {
                setOutcome("Du vann! ");
              } else {
                setOutcome("Du förlorade. ");
              }
        };
    }, []);

    const findCorrectAnswerLetter = (answers) => {
        const correctAnswerIndex = answers.findIndex((answer) => answer.correct);
        return String.fromCharCode(65 + correctAnswerIndex);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center item-center bg-indigo-5">
            <Navbar />
            <div className="w-full mx-auto bg-gradient-to-b from-white via-[#f2edf1a9] to-[#a3c0c5] bg-opacity-50 pb-16 px-4">
                <h1 className="pt-16 mb-8 flex justify-center items-center w-full text-black text-2xl md:text-5xl p-2">RESULTAT</h1>
                <h1 className="mx-auto text-center pb-2 text-black text-sm md:text-xl">Du fick {score}/{game && game.length} rätt.</h1>
                {creatorUser && <>
                    <h1 className="mx-auto text-center pb-12 text-black text-sm md:text-xl">{outcome} testuser fick {creatorScore} rätt.</h1>
                </>
                }
                <div className="flex flex-col justify-center items-center text-white">
                    <div className="w-[16rem] md:w-[36rem] grid grid-cols-7">
                        <h1 className="text-center font-extralight col-start-7 col-end-8 text-black text-[0.6rem] md:text-xs">Ditt svar</h1>
                    </div>
                    {game && answered && game.map((question, index) => {
                        return (
                            <button className={`hover:shadow-sm  ${!expand[index] && answered[index].correct === 1 && "hover:shadow-green-400 shadow-green-900"} ${!expand[index] && answered[index].correct === 0 && "hover:shadow-red-400  shadow-red-900"} w-[16rem] md:w-[36rem] text-black my-1 ${expand[index] ? " cursor-default border-b-none border-x-2 border-b-4 pb-2" : "border-b-2 border-x-2 borde"}`}
                                onClick={() => handleExpand(index)}
                                key={index}>
                                <div className="grid grid-cols-7">
                                    <h1 className="col-start-1 col-end-2 text-start pl-2 text-[1.2rem] py-1">{index + 1}. </h1>
                                    <h1 className={`col-start-2 col-end-7 text-start self-center text-[0.6rem] md:text-[0.7rem] py-1 ${!expand[index] ? 'md:max-w-[14rem] overflow-hidden whitespace-nowrap text-ellipsis' : ''
                                        }`}>{question.question} </h1>
                                    {!expand[index] ? (
                                        <div className={`col-start-7 col-end-8 px-4 flex items-center justify-center bg-white ${answered[index].correct === 1 ? " bg-[#2078456b]" : " bg-[#bb171794]"}`}>
                                            {!expand[index] && findCorrectAnswerLetter(question.answer)}
                                        </div>
                                    ) : null}

                                </div>
                                {expand[index] &&
                                    <div className="w-full">
                                        {question.answer.map((answer, answerIndex) => {
                                            return (
                                                <div className={`grid grid-cols-8 w-full mx-auto py-1 my-4 ${answered[index].correct === 0 && answered[index].answer === answer.answer && "bg-red-200 bg-opacity-30"} ${answer.correct && "shadow-lg shadow-[#9cd3a2bf] border-x-2 border-x-[#9cd3a2bf] font-bold"}`} key={answerIndex}>
                                                    <p className="col-start-1 col-end-2 self-center text-[0.57rem] md:text-[0.6rem]">{String.fromCharCode(65 + answerIndex)}. </p>
                                                    <p className={`col-start-2 col-end-8 font-light text-[0.57rem] md:text-[0.6rem] text-center pl-2 items-center`} >{answer.answer}</p>
                                                </div>)
                                        })}
                                    </div>
                                }
                            </button>
                        )
                    })}
                </div>

                <div className="flex flex-col justify-center items-center m-10 mx-auto">
                    <h1 className="pt-12 mt-6 mb-8 text-black text-2xl md:text-4xl p-2">UTMANA EN VÄN</h1>
                    <h1 className="text-center pb-12 text-black text-[0.3.rem] mx-8 md:text-xl">Dela koden nedan och se vem som får flest poäng!</h1>
                    <p className="text-xs text-center">{roundID}</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}








/* export default function Result() {

    const location = useLocation();
    const [roundID, setRoundID] = useState();
    const [game, setGame] = useState();
    const [answered, setAnswered] = useState();
    const [score, setScore] = useState();
    const [expand, setExpand] = useState([]);
    console.log(answered);
    const handleExpand = (index) => {
        setExpand((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    useEffect(() => {
        setRoundID(location.state.roundID);
        setGame(location.state.game);
        setAnswered(location.state.answered);
        setScore(location.state.score);
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center item-center bg-indigo-5">
            <Navbar />
            <div className="w-full mx-auto bg-white bg-opacity-50 pb-16 px-4">
                <h1 className="pt-12 mb-8 flex justify-center items-center w-full text-black text-2xl md:text-6xl p-2">RESULTAT</h1>
                <h1 className="mx-auto text-center pb-12 text-black text-base md:text-xl">{score}/{game && game.length}</h1>

                <div className="flex flex-col justify-center items-center text-white gap-2">


                    {game && answered && game.map((question, index) => {
                        return (
                            <button className={`hover:shadow-sm  ${!expand[index] && answered[index].correct === 1 && "hover:shadow-green-400 shadow-green-900 bg-[#1b9a5011]"} ${!expand[index] && answered[index].correct === 0 && "hover:shadow-red-400 shadow-red-900 bg-[#9a1b1b11]"} w-[30rem] text-black my-2 ${expand[index] ? " cursor-default border-b-none border-x-2 border-b-4 pb-4" : "border-b-2 border-x-2"}`}
                                onClick={() => handleExpand(index)}
                                key={index}>
                                <h1 className="self-center text-start pl-2 text-[0.6rem] md:text-[0.7rem] py-1">{index + 1}. {question.question}</h1>
                                {expand[index] &&
                                    <div className="w-full">
                                        {question.answers.map((answer, answerIndex) => {
                                            return (
                                                <div className={`grid grid-cols-8 w-full mx-auto py-1 my-4 ${answered[index].correct === 0 && answered[index].answer === answer.answer && "bg-red-200 bg-opacity-30"} ${answer.correct && "shadow-lg shadow-[#9cd3a2bf] border-x-2 border-x-[#9cd3a2bf] font-bold"}`} key={answerIndex}>
                                                    <p className="col-start-1 col-end-2 self-center text-[0.57rem] md:text-[0.6rem]">{String.fromCharCode(65 + answerIndex)}. </p>
                                                    <p className={`col-start-2 col-end-8 font-light text-[0.57rem] md:text-[0.6rem] text-center pl-2 items-center`} >{answer.answer}</p>
                                                </div>)
                                        })}
                                    </div>
                                }

                            </button>
                        )
                    })}


                </div>
            </div>
            <Footer />
        </div>
    );
} */
