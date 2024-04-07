// Timer.js

import { useContext ,useEffect} from 'react';
import { QuizContext } from '../context/Quizcontext';

export default function Timer() {
  const {
    timeLeft,
    setTimeLeft,
    currentQuestion,  
    setCurrentQuestion,
    questions,
    
  } = useContext(QuizContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if(timeLeft > 0) {
        setTimeLeft(prev => prev - 1); 
      } else {
        
        if(currentQuestion + 1 < questions.length) {

           setCurrentQuestion(prev => prev + 1);  

           setTimeLeft(20); // reset timer
          
        } else {
        
          clearInterval(interval); 
        }
      }
    }, 1000);

    return () => clearInterval(interval);

  }, [timeLeft]); 

  return (
    <h5 className="time">Time: {timeLeft} sec</h5>
  );
}
