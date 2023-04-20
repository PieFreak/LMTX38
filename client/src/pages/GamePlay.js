import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LasPopup from '../components/LasPopup';

export default function GamePlay() {

	const navigate = useNavigate();
	const location = useLocation();
	const game = location.state.game;
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState(Array(game.length).fill(undefined));
	const [showResultButton, setShowResultButton] = useState(false);
	const [clickableResultButton, setClickableResultButton] = useState(false);

	const handleAnswerClick = (answer) => {
		setSelectedAnswers(prevSelectedAnswers => {
			const newSelectedAnswers = [...prevSelectedAnswers];
			newSelectedAnswers[currentQuestion] = answer;
			return newSelectedAnswers;
		});
	};

	const checkIfAllQuestionsAnswered = (answers) => {
		return answers.every(answer => answer != null);
	};

	useEffect(() => {
		if (checkIfAllQuestionsAnswered(selectedAnswers)) {
			setClickableResultButton(true);
		} else {
			setClickableResultButton(false);
		}
	}, [selectedAnswers]);


	const handleForwardArrow = () => {
		if (currentQuestion >= game.length - 2) setShowResultButton(true);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < game.length) {
			setCurrentQuestion(nextQuestion);
		}
	};

	const handleBackArrow = () => {
		const nextQuestion = currentQuestion - 1;
		if (nextQuestion >= 0) {
			setCurrentQuestion(nextQuestion);
		}
	};

	const handleResultClick = async () => {
		try {
			const score = selectedAnswers.filter(answer => answer.correct).length;
			const questionIDs = game.map(question => question.id);
			const response = await axios.post('http://localhost:5000/game/round/', {
				questions: questionIDs, score: score
			});
			/* console.log(response.data); */
			navigate('/result', { state: { roundID: response.data, answered: selectedAnswers, game: game, score: score } });
		} catch (error) {
			console.error(error.message);
		}
	};

	const [showDocument, setShowDocument] = useState(false);

	useEffect(() => {
		document.body.style.overflowY = showDocument ? 'auto' : 'unset';
	  }, [showDocument]);

	return (
		<div className="min-h-screen w-full bg-white">
			{game[currentQuestion].type === 'LÄS' && (<LasPopup questionId ={game[currentQuestion].id} show={showDocument} onClose={() => setShowDocument(false)} />)}
			<Navbar />
			<div className="w-full mx-auto">
				{game[currentQuestion].type === 'LÄS' && <button className={`absolute left-0 right-0 w-fit border-b-2 border-r-2 border-indigo-200 bg-white md:py-0.5 mt-6 md:mt-8 px-2 shadow-md shadow-gray-500 mx-auto flex justify-start items-center ${showDocument ? "hidden" : ""}`} onClick={() => setShowDocument(!showDocument)}><p className={`text-[0.7rem] md:text-base`}>Visa text</p></button>}

				<h1 className="w-full md:w-[30rem] mx-auto text-end text-[0.5rem] self-center pt-8 pr-4">{game[currentQuestion].type}</h1>
				<h1 className={`w-[15rem] md:w-[30rem] mx-auto text-xs text-center pt-6 md:pt-20 mb-2 h-[6rem] md:h-[12rem]`}>{game[currentQuestion].question}</h1>

				<div className="w-full px-2 md:w-[30rem] mx-auto h-[12rem]">
					{game[currentQuestion].answers.map((answer, index) => {

						return (
							<button
								key={index}
								className={`grid grid-cols-8 w-full mx-auto hover:shadow-sm hover:border-x-2 py-1 my-2 md:my-4 hover:border-x-cyan-800 ${selectedAnswers[currentQuestion] === answer
									? "hover:shadow-sm hover:shadow-cyan-400 shadow-sm shadow-cyan-600 border-x-2 border-x-cyan-900"
									: "shadow-inner shadow-indigo-100"
									}`}
								onClick={() => handleAnswerClick(answer)}
							>
								<p className="col-start-1 col-end-2 self-center text-[0.57rem] md:text-[0.6rem]">{String.fromCharCode(65 + index)}. </p>
								<p className={`col-start-2 col-end-9 md:col-end-8 text-start md:text-center text-[0.57rem] md:text-[0.6rem]`}>{answer.answer}</p>
							</button>
						);
					})}
				</div>
				{showResultButton &&
					<div className="flex justify-center items-center my-auto md:my-0 md:pt-12 mx-auto">
						<button className={`${showDocument && "-z-10"} mt-1 md:-mt-4 text-xs md:text-base bg-gradient-to-r from-rose-400 to-red-800 rounded-md px-10 py-1 hover:bg-rose-400 transition-300 shadow-2xl  transition-all hover:shadow-none border-b-4 border-l-2 border-r-4 border-t-2 border-b-black border-r-black border-t-red-500 border-l-rose-900${!clickableResultButton ? 'hover:bg-indigo-50 opacity-40 cursor-default' : 'shadow-slate-900 shadow-md hover:shadow-md hover:shadow-slate-600'}`}
							onClick={() => handleResultClick(game, selectedAnswers)}>VISA RESULTAT
						</button>
					</div>
				}
				<div className={`${showDocument && "hidden"} md:pt-10 fixed md:static bottom-2 md:bottom-0 left-0 right-0 w-full md:w-[30rem] mx-auto flex justify-between ${showResultButton ? "mt-auto" : "mt-[6.3rem]"}`}>
					<button className={`ml-1 px-12 py-4 rounded-sm ${currentQuestion <= 0 ? 'hover:bg-indigo-50 opacity-10 cursor-default' : ' hover:opacity-90 shadow-slate-900 shadow-md hover:shadow-md hover:shadow-slate-600'}`} onClick={handleBackArrow}>
						<div className="gg-arrow-left scale-150"></div>
					</button>
					<h1 className="w-full text-center self-end text-xs md:text-base lg:text-xl">{currentQuestion + 1}/{game.length}</h1>

					<button className={`mr-1 px-12 py-4 rounded-sm ${currentQuestion >= game.length - 1 ? 'hover:bg-indigo-50 opacity-10 cursor-default' : 'hover:opacity-90 shadow-slate-900 shadow-md hover:shadow-md hover:shadow-slate-600'}`} onClick={handleForwardArrow}>
						<div className="gg-arrow-right scale-150"></div>
					</button>

				</div>

			</div >
			{/* 			<Footer />
 */}		</div>
	)

}