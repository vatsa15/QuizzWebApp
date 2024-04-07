import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Quiz from "./components/Quiz";
import './App.css'
import {QuizProvider} from './context/Quizcontext'

function App() {
  // const [startTimer, setStartTimer] = useState(false);
  // const [name, setName] = useState("");
  return (
    <QuizProvider>
    <div>
    <Router>
        <Routes>
           <Route path="/" element={<Home />} />

           <Route 
             path="/quiz"  
             element={<Quiz />}  
           />
           
           <Route 
             path="/instructions"
             element={<Instructions />}
           />
        </Routes>
      </Router>
    </div>
    </QuizProvider>
  )
}

export default App
