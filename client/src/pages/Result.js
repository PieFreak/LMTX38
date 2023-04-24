import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function Result() {
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

  const findCorrectAnswerLetter = (answers) => {
    const correctAnswerIndex = answers.findIndex((answer) => answer.correct);
    return String.fromCharCode(65 + correctAnswerIndex);
  };

  return (
    <div className="vh-screen d-flex flex-column justify-content-center align-items-center bg-light">
      <Navbar />
      <div className="w-full mx-auto bg-gradient-to-b from-white via-[#f2edf1a9] to-[#a3c0c5] bg-opacity-50 pb-16 px-4">
        <h1 className="pt-5 mb-5 d-flex justify-content-center align-items-center w-full text-black h2 md:h1 p-2">
          RESULTAT
        </h1>
        <h1 className="mx-auto text-center pb-5 text-black h5 md:h2">
          Du fick {score}/{game && game.length} rätt
        </h1>

        <div className="col-12 col-md-8 offset-md-2 d-flex flex-column justify-content-center align-items-end">
          <div className="">
            <h1 className="text-center text-md-start h6">Ditt svar:</h1>
          </div>
          {game &&
            answered &&
            game.map((question, index) => {
              return (
                <button
                  className={`btn ${
                    !expand[index] &&
                    answered[index].correct === 1 &&
                    ""
                  } ${
                    !expand[index] &&
                    answered[index].correct === 0 &&
                    ""
                  } w-100 my-1 ${
                    expand[index]
                      ? " cursor-default border-bottom-2 border-2 border-bottom border-secondary pb-2"
                      : "border-bottom-2 border-2 border-bottom"
                  }`}
                  onClick={() => handleExpand(index)}
                  key={index}
                >
                  <div className="row align-items-center">
                    <h1 className="col-1 text-start pl-2 h6">{index + 1}. </h1>
                    <h1
                      className={`col-6 text-start text-wrap h6 ${
                        !expand[index]
                          ? "max-width-75 overflow-hidden text-truncate"
                          : ""
                      }`}
                    >
                      {question.question}
                    </h1>
                    {!expand[index] ? (
                      <div
                        className={`rounded h-100 col-1 offset-3 offset-md-4 px-2 d-flex align-items-center justify-content-center ${
                          answered[index].correct === 1
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {!expand[index] &&
                          findCorrectAnswerLetter(question.answers)}
                      </div>
                    ) : null}
                  </div>
                  {expand[index] && (
                    <div className="w-100">
                      {question.answers.map((answer, answerIndex) => {
                        return (
                          <div
                            className={`row mx-auto py-1 my-4 ${
                              answered[index].correct === 0 &&
                              answered[index].answer === answer.answer &&
                              "text-danger bg-opacity-30"
                            } ${
                              answer.correct &&
                              "text-success border-right border-left border-success border-bottom-0"
                            }`}
                            key={answerIndex}
                          >
                            <p className="col-1 text-center font-size-6">
                              {String.fromCharCode(65 + answerIndex)}.{" "}
                            </p>
                            <p
                              className={` col-11 text-wrap font-size-6 text-center pl-2`}
                            >
                              {answer.answer}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </button>
              );
            })}
        </div>

        <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 d-flex flex-column justify-content-center align-items-center m-5 mx-auto">
          <h1 className="pt-5 mt-5 mb-5 h5 md:h2 py-5">
            UTMANA EN VÄN
          </h1>
          <h1 className="text-center pb-5 mx-1 h5 md:h3">
            Dela koden nedan och se vem som får flest poäng!
          </h1>
          <p className="pb-5 h6 text-center">{roundID}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
