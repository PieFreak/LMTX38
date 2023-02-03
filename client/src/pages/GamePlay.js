import React, { useState } from "react";
import q1 from "../assets/testquestions/q1.png";
import q2 from "../assets/testquestions/q2.png";
import q3 from "../assets/testquestions/q3.png";
import q4 from "../assets/testquestions/q4.png";


export default function GamePlay() {

    const questions = [
        {
			question: q1,
			answerOptions: [
				{ answer: 'A', isCorrect: false },
				{ answer: 'B', isCorrect: false },
				{ answer: 'C', isCorrect: true },
				{ answer: 'D', isCorrect: false }
			]
		},
        {
			question: q2,
			answerOptions: [
				{ answer: 'A', isCorrect: false },
				{ answer: 'B', isCorrect: false },
				{ answer: 'C', isCorrect: true },
				{ answer: 'D', isCorrect: false }
			]
		},
        {
			question: q3,
			answerOptions: [
				{ answer: 'A', isCorrect: false },
				{ answer: 'B', isCorrect: false },
				{ answer: 'C', isCorrect: true },
				{ answer: 'D', isCorrect: false }
			]
		},
        {
			question: q4,
			answerOptions: [
				{ answer: 'A', isCorrect: false },
				{ answer: 'B', isCorrect: false },
				{ answer: 'C', isCorrect: true },
				{ answer: 'D', isCorrect: false }
			]}
        ];
        
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerOption = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setCurrentQuestion(0);
		}
	};

	const handleForwardArrow = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setCurrentQuestion(0);
		}
	};

	const handleBackArrow = () => {
		const nextQuestion = currentQuestion - 1;
		if (nextQuestion > questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setCurrentQuestion(0);
		}
	};

    return (
        <div className="flex justify-center items-center flex-col w-screen h-screen bg-[#6b8db9]">
            <div className="grid grid-cols-3 grid-rows-2 w-4/5 h-1/5 mx-2">
				<div></div>
				<div className="flex text-center justify-center align-baseline">
                	<h1 className="text-2xl max-md:text-sm">HP-Quiz</h1>
				</div>
				<div></div>
				<div className="relative max-md:w-3/5">
					<button className="w-auto absolute bottom-0 left-0 border-2 hover:bg-blue-700 text-2xl font-serif max-md:text-xs"
					onClick={() => handleBackArrow()}>{`<---`}</button>
				</div>
				<div></div>
				<div className="relative">
					<button className="absolute bottom-0 right-0 border-2 hover:bg-blue-700 text-2xl font-serif max-md:text-xs"
					onClick={() => handleForwardArrow()}>{`--->`}</button>
				</div>
            </div>
            <div className="flex justify-center items-baseline overflow-y-scroll w-4/5 h-full border-blue-200 border-2 m-2">
                    <img src={questions[currentQuestion].question} alt="Logo"/>
            </div>
            <div className="w-4/5 h-1/5 bg-[#6b8db9] flex justify-center items-center m-4">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button className="object-fill my-2 mx-1 px-4 py-1 rounded-xl hover:bg-blue-700 text-2xl max-md:text-xs border-2 border-sky-50"
                        onClick={() => handleAnswerOption()}>{answerOption.answer}</button>
                ))}
            </div>
        </div>
    );
}