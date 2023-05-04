import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LasPopup from '../components/LasPopup';
import { Container, Row, Col, Button } from "react-bootstrap";

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
		<div className="vh-100 w-100 bg-white">
			{game[currentQuestion].type === "LÄS" && (
				<LasPopup
					className="border border-danger"
					questionId={game[currentQuestion].id}
					show={showDocument}
					onClose={() => setShowDocument(false)}
				/>
			)}
			<Navbar />
			<Container className="">
				<Row className="">
					<Col className="text-end py-2">{game[currentQuestion].type}</Col>
				</Row>
				<Row>
					<Col className="text-center py-1">
						{game[currentQuestion].question}
					</Col>
				</Row>
				<Row>
					<Col className="mt-5 mb-5">
						{game[currentQuestion].answers.map((answer, index) => {
							return (
								<Button
									variant="outline-secondary"
									key={index}
									className={`text-center d-grid w-100 mx-auto my-1 ${selectedAnswers[currentQuestion] === answer
										? "border border-info"
										: "border border-light-subtle border-top-0 border-start-0 border-end-0"
										}`}
									onClick={() => handleAnswerClick(answer)}
								>
									<div className="d-flex align-items-center">
										<span className="me-2 h5">
											{String.fromCharCode(65 + index)}.
										</span>
										<span className="flex-grow-1 h5 text-center">
											{answer.answer}
										</span>
									</div>
								</Button>
							);
						})}

					</Col>
				</Row>
				{showResultButton && (
					<Row className="justify-content-center">
						<Col xs="auto">
							<Button
								variant={clickableResultButton ? "danger" : "danger bg-opacity-25"}
								disabled={!clickableResultButton}
								onClick={handleResultClick}
							>
								Visa resultat
							</Button>
						</Col>
					</Row>
				)}
				<Row className="py-4 px-3 bg-white">
					<Col xs="auto">
						<Button
							className="px-4"
							variant="outline-dark"
							disabled={currentQuestion <= 0}
							onClick={handleBackArrow}
						>
							&lt;
						</Button>
					</Col>
					<Col className="text-center">
						{currentQuestion + 1}/{game.length}
					</Col>
					<Col xs="auto">
						<Button
							className="px-4"
							variant="outline-dark"
							disabled={currentQuestion >= game.length - 1}
							onClick={handleForwardArrow}
						>
							&gt;
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}