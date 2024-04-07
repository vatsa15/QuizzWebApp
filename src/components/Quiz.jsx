import  { useState,useContext } from "react";
import { quizQuestions } from "../QuizData/quizdata";
import { QuizContext } from "../context/Quizcontext";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

const Quiz = () => {

  const { startTimer } = useContext(QuizContext);
  const { setName,currentQuestion,setCurrentQuestion ,setTimeLeft} = useContext(QuizContext);
 
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);
  const [clickedAnswer, setclickedAnswer] = useState(0);


  function restartQuiz() {
    setCurrentQuestion(0);
 }
  

  const navigate = useNavigate();

  const selectedAnswer = (selected, id) => {
    setclickedAnswer(id);
    setTimeout(() => {
      const nextQ = currentQuestion + 1;
      setclickedAnswer(0);
      if (nextQ < quizQuestions.length) {
        setCurrentQuestion(nextQ);
      }
      if (nextQ === quizQuestions.length) {
        setDisplayScore(true);
      }
      if (selected === true) {
        setScore((score) => score + 1);
      }
      setTimeLeft(20);
    }, 600);
  };


  return (
    <div className="Main_Div">
      <div className="Quiz_Div">
        {displayScore ? (
          <>
            <p>
              Your score : {score} / {quizQuestions.length}
            </p>
            <div className="buttons_div">
              <button
                onClick={() => {
                  restartQuiz()
                  navigate(-1);
                  setName("");
                }}
              >
                Retry
              </button>
              <button
                onClick={() => {
                  restartQuiz()
                  navigate("/");
                  setName("");
                }}
              >
                Exit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="quiz_top_div">
              <h2>
                {currentQuestion + 1} of {quizQuestions.length}
              </h2>
              {startTimer && (
                <Timer/>
              )}
            </div>

            <h5>{quizQuestions[currentQuestion].question}</h5>
            <ul>
              {quizQuestions[currentQuestion].answers.map((answer) => (
                <li
                  className={clickedAnswer === answer.id ? `answerCss` : null}
                  key={answer.id}
                  onClick={() => selectedAnswer(answer.isCorrect, answer.id)}
                >
                  {answer.ans}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
export default Quiz;
