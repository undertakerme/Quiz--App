import React, { useEffect, useState } from "react";
import Question from "./Question";
import Timer from "./Timer";
import localData from "../data/questions.json";

/**
 * Quiz Component - Main quiz interface that handles question navigation and scoring
 * @param {Function} setScore - Function to update the user's score
 * @param {Function} setUserAnswers - Function to store user's answers
 * @param {Function} setQuizCompleted - Function to mark quiz as completed
 * @param {string} difficulty - Difficulty level (easy, medium, hard)
 */
function Quiz({ setScore, setUserAnswers, setQuizCompleted, difficulty }) {
  // State management for quiz functionality
  const [questions, setQuestions] = useState([]); // Array of quiz questions
  const [current, setCurrent] = useState(0); // Current question index
  const [selected, setSelected] = useState(null); // User's selected answer
  const [progress, setProgress] = useState(0); // Progress percentage
  const [userAnswers, setUserAnswersLocal] = useState([]); // Local storage of answers for navigation

  // Load questions from API or fallback to local data
  useEffect(() => {
    // Try to fetch questions from Open Trivia Database API
    fetch(`https://opentdb.com/api.php?amount=8&difficulty=${difficulty}&type=multiple`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // Format API questions to match our structure
          const formatted = data.results.map((q, index) => {
            const options = [...q.incorrect_answers, q.correct_answer].sort(
              () => Math.random() - 0.5
            );
            return {
              id: index,
              question: q.question,
              options,
              answer: options.indexOf(q.correct_answer),
            };
          });
          setQuestions(formatted);
        } else {
          // Fallback to local questions if API fails
          setQuestions(localData[difficulty]);
        }
      })
      .catch(() => {
        // Use local questions if API is unavailable
        setQuestions(localData[difficulty]);
      });
  }, [difficulty]);

  // Handle navigation to next question
  const handleNext = () => {
    if (selected === null) return;

    const isCorrect = selected === questions[current].answer;

    // Update score if answer is correct
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Store the current answer
    const currentAnswer = { ...questions[current], selected };
    setUserAnswers((prev) => [...prev, currentAnswer]);
    setUserAnswersLocal((prev) => [...prev, currentAnswer]);

    // Reset selection and update progress
    setSelected(null);
    setProgress(((current + 1) / questions.length) * 100);

    // Check if we've reached the last question
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      // Quiz completed - save high score and finish
      setQuizCompleted(true);
      setScore((prevScore) => {
        const finalScore = prevScore + (isCorrect ? 1 : 0);
        const high = Math.max(
          Number(localStorage.getItem("highScore")) || 0,
          finalScore
        );
        localStorage.setItem("highScore", high);
        return finalScore;
      });
    }
  };

  // Handle navigation to previous question
  const handlePrevious = () => {
    if (current > 0) {
      // Remove the last answer from local storage
      const updatedAnswers = userAnswers.slice(0, -1);
      setUserAnswersLocal(updatedAnswers);
      setUserAnswers(updatedAnswers);
      
      // Go back to previous question
      setCurrent((prev) => prev - 1);
      setProgress((current / questions.length) * 100);
      
      // Restore the previous selection if it exists
      if (updatedAnswers[current - 1]) {
        setSelected(updatedAnswers[current - 1].selected);
      } else {
        setSelected(null);
      }
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-info">
          <h2 className="quiz-title">
            Question {current + 1} of {questions.length}
          </h2>
          <div className="difficulty-badge">
            <span className="difficulty-text">{difficulty}</span>
          </div>
        </div>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">
            {Math.round(progress)}% Complete
          </div>
        </div>
      </div>

      {questions.length > 0 && (
        <>
          <Question data={questions[current]} selected={selected} setSelected={setSelected} />
          <div className="quiz-footer">
            <Timer duration={30} onTimeUp={handleNext} />
            <div className="navigation-buttons">
              <button 
                onClick={handlePrevious} 
                className="btn btn-outline"
                disabled={current === 0}
              >
                ⬅️ Previous
              </button>
              <button 
                onClick={handleNext} 
                className={`btn ${selected === null ? 'btn-disabled' : ''}`}
                disabled={selected === null}
              >
                {current === questions.length - 1 ? "🏁 Finish Quiz" : "➡️ Next Question"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
