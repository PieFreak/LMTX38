import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GamePlay() {

	const navigate = useNavigate();
	const location = useLocation();
	const game = location.state.game;
	console.log(game.length)
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState(Array(game.length).fill(-1));

	const [showResultButton, setShowResultButton] = useState(false);
	const [clickableResultButton, setClickableResultButton] = useState(false);

	const handleAnswerClick = (index) => {
		setSelectedAnswers(prevSelectedAnswers => {
			const newSelectedAnswers = [...prevSelectedAnswers];
			newSelectedAnswers[currentQuestion] = index;
			return newSelectedAnswers;
		});
	};

	const checkIfAllQuestionsAnswered = (answers) => {
		return answers.every(answer => answer !== -1);
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
		//TODO
	};

	return (
		<div className="min-h-screen w-full bg-white">
			<Navbar />
			<div className="w-full mx-auto">

				<h1 className="w-full md:w-[30rem] mx-auto text-end text-[0.5rem] self-center pt-8 pr-4">{game[currentQuestion].type}</h1>
				<h1 className="w-[15rem] md:w-[30rem] h-[12rem] mx-auto text-xs text-center pt-20 mb-4">{game[currentQuestion].question}</h1>
				<div className="w-full px-2 md:w-[30rem] mx-auto mb-8">
					{game[currentQuestion].answers.map((answer, index) => {

						return (
							<button
								key={index}
								className={`grid grid-cols-8 w-full mx-auto hover:shadow-sm hover:border-x-2 py-1 my-4 hover:border-x-cyan-800 ${selectedAnswers[currentQuestion] === index
									? "hover:shadow-sm hover:shadow-cyan-400 shadow-sm shadow-cyan-600 border-x-2 border-x-cyan-900"
									: "shadow-inner shadow-indigo-100"
									}`}
								onClick={() => handleAnswerClick(index)}
							>
								<p className="col-start-1 col-end-2 self-center text-[0.57rem] md:text-[0.6rem]">{String.fromCharCode(65 + index)}. </p>
								<p className={`col-start-2 col-end-8 text-center text-[0.57rem] md:text-[0.6rem]`}>{answer.answer}</p>
							</button>
						);
					})}
				</div>
				{showResultButton ?
					<div className="flex justify-center items-center mx-auto pb-8">
						<button className={`bg-gradient-to-r from-rose-400 to-red-800 rounded-md px-4 py-1 hover:bg-rose-400 transition-300 shadow-2xl  transition-all hover:shadow-none border-b-4 border-l-2 border-r-4 border-t-2 border-b-black border-r-black border-t-red-500 border-l-rose-900${!clickableResultButton ? 'hover:bg-indigo-50 opacity-40 cursor-default' : 'shadow-slate-900 shadow-md hover:shadow-md hover:shadow-slate-600'}`}
							onClick={() => handleResultClick(game, selectedAnswers)}>VISA RESULTAT
						</button>
					</div>
					:
					<div></div>
				}
				<div className={`w-full md:w-[30rem] mx-auto flex justify-between ${showResultButton ? "mt-auto" : "mt-[6.3rem]"}`}>
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