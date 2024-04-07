
import { createContext, useState } from 'react';
import { quizQuestions } from '../QuizData/quizdata';
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(20);
 
  const [questions, setQuestions] = useState(quizQuestions);
  const [name, setName] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  function restartQuiz() {
    setCurrentQuestion(0);
  }
  return (
    <QuizContext.Provider value={{
     
      restartQuiz,
       timeLeft, 
      setTimeLeft,
      questions,
      setQuestions,
      currentQuestion,
      setCurrentQuestion,
      name, 
      setName,
      startTimer,
      setStartTimer  
    }}>  
      {children}
    </QuizContext.Provider>
  );
}