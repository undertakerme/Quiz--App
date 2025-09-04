import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Start from "./components/Start";
import "./App.css";

/**
 * Main App Component - Root component that manages the overall quiz flow
 * 
 * This component serves as the main container and state manager for the entire
 * quiz application. It handles the three main states:
 * 1. Start screen (difficulty selection)
 * 2. Quiz screen (question answering)
 * 3. Result screen (score display and review)
 * 
 * The component uses conditional rendering to display the appropriate screen
 * based on the current state of the application.
 */
function App() {
  // State management for the entire application
  
  // Track the user's current score (number of correct answers)
  const [score, setScore] = useState(0);
  
  // Store all user answers with question data for result review
  const [userAnswers, setUserAnswers] = useState([]);
  
  // Boolean flag to determine if quiz is completed
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Store the selected difficulty level (null, 'easy', 'medium', or 'hard')
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className="app">
      {/* Conditional rendering based on application state */}
      
      {/* Show Start component if no difficulty is selected */}
      {!difficulty ? (
        <Start setDifficulty={setDifficulty} />
      ) : !quizCompleted ? (
        /* Show Quiz component if difficulty is selected but quiz not completed */
        <Quiz
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          setQuizCompleted={setQuizCompleted}
          difficulty={difficulty}
        />
      ) : (
        /* Show Result component if quiz is completed */
        <Result
          score={score}
          userAnswers={userAnswers}
          setQuizCompleted={setQuizCompleted}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          setDifficulty={setDifficulty}
        />
      )}
    </div>
  );
}

export default App;
