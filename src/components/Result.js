import React from "react";

/**
 * Result Component - Displays quiz results and performance analysis
 * 
 * This component shows the user's final score, performance message,
 * high score tracking, and detailed breakdown of all questions.
 * It also provides functionality to restart the quiz.
 * 
 * @param {number} score - User's final score (number of correct answers)
 * @param {Array} userAnswers - Array of user's answers with question data
 * @param {Function} setQuizCompleted - Function to reset quiz completion status
 * @param {Function} setScore - Function to reset the score
 * @param {Function} setUserAnswers - Function to clear user answers
 * @param {Function} setDifficulty - Function to reset difficulty selection
 */
function Result({ score, userAnswers, setQuizCompleted, setScore, setUserAnswers, setDifficulty }) {
  /**
   * Restart the quiz by resetting all state variables
   * This function is called when the user clicks "Play Again"
   */
  const restartQuiz = () => {
    setQuizCompleted(false);  // Reset quiz completion status
    setScore(0);              // Reset score to zero
    setUserAnswers([]);       // Clear all user answers
    setDifficulty(null);      // Reset difficulty selection
  };

  // Get high score from localStorage or use current score as fallback
  const highScore = localStorage.getItem("highScore") || score;
  
  // Calculate percentage score
  const percentage = Math.round((score / userAnswers.length) * 100);
  
  /**
   * Determine performance message and styling based on percentage score
   * @returns {Object} Object containing message and color class
   */
  const getScoreMessage = () => {
    if (percentage >= 80) return { message: "Excellent! 🎉", color: "success" };
    if (percentage >= 60) return { message: "Good job! 👍", color: "good" };
    if (percentage >= 40) return { message: "Not bad! 😊", color: "okay" };
    return { message: "Keep practicing! 💪", color: "needs-improvement" };
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="result-container">
      {/* Header section with score display and high score */}
      <div className="result-header">
        <div className="score-display">
          {/* Circular score indicator */}
          <div className="score-circle">
            <span className="score-percentage">{percentage}%</span>
            <span className="score-fraction">{score}/{userAnswers.length}</span>
          </div>
          {/* Performance message with dynamic styling */}
          <h2 className={`score-message ${scoreInfo.color}`}>
            {scoreInfo.message}
          </h2>
        </div>
        
        {/* High score display */}
        <div className="high-score-section">
          <div className="high-score-badge">
            <span className="high-score-icon">🏆</span>
            <div className="high-score-content">
              <span className="high-score-label">High Score</span>
              <span className="high-score-value">{highScore}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed breakdown of all questions */}
      <div className="results-breakdown">
        <h3>Question Breakdown</h3>
        <div className="questions-list">
          {/* Map through each question to show individual results */}
          {userAnswers.map((q, i) => {
            const isCorrect = q.selected === q.answer; // Check if answer was correct
            return (
              <div key={i} className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                {/* Question header with number and status */}
                <div className="question-result-header">
                  <span className="question-number">Q{i + 1}</span>
                  <span className={`result-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                </div>
                
                {/* Question content and answer comparison */}
                <div className="question-result-content">
                  {/* Question text with HTML support */}
                  <p className="question-text" dangerouslySetInnerHTML={{ __html: q.question }} />
                  
                  {/* Answer comparison section */}
                  <div className="answer-comparison">
                    {/* User's answer */}
                    <div className="answer-item">
                      <span className="answer-label">Your Answer:</span>
                      <span className={`answer-text ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {q.options[q.selected]}
                      </span>
                    </div>
                    
                    {/* Show correct answer only if user was wrong */}
                    {!isCorrect && (
                      <div className="answer-item">
                        <span className="answer-label">Correct Answer:</span>
                        <span className="answer-text correct">
                          {q.options[q.answer]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="result-actions">
        <button className="btn btn-secondary" onClick={restartQuiz}>
          🔄 Play Again
        </button>
      </div>
    </div>
  );
}

export default Result;
