import React from "react";

/**
 * Start Component - Welcome screen and difficulty selection
 * 
 * This component serves as the entry point for the quiz application.
 * It displays a welcome message, highlights key features, and allows
 * users to select their preferred difficulty level.
 * 
 * @param {Function} setDifficulty - Function to set the selected difficulty level
 *                                  (easy, medium, or hard)
 */
function Start({ setDifficulty }) {
  // Configuration for difficulty levels with visual styling
  const difficultyLevels = [
    { 
      level: "easy",           // Internal difficulty identifier
      label: "Easy",           // Display name for the difficulty
      description: "Perfect for beginners", // User-friendly description
      emoji: "😊",            // Visual indicator for the difficulty
      color: "btn-secondary"   // CSS class for button styling (green)
    },
    { 
      level: "medium", 
      label: "Medium", 
      description: "A good challenge",
      emoji: "🤔",
      color: "btn"            // CSS class for button styling (blue - primary)
    },
    { 
      level: "hard", 
      label: "Hard", 
      description: "For the experts",
      emoji: "🧠",
      color: "btn-danger"     // CSS class for button styling (red)
    }
  ];

  return (
    <div className="start-container">
      {/* Welcome section with app title and feature highlights */}
      <div className="welcome-section">
        <h1 className="title">🎯 Quiz Master</h1>
        <p className="subtitle">
          Test your knowledge with our interactive quiz game!
        </p>
        
        {/* Feature highlights to showcase app capabilities */}
        <div className="features">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <span>Quick Questions</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🏆</span>
            <span>Track High Scores</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <span>Detailed Results</span>
          </div>
        </div>
      </div>
      
      {/* Difficulty selection section */}
      <div className="difficulty-section">
        <h2>Choose Your Challenge</h2>
        <p>Select a difficulty level to begin:</p>
        
        {/* Dynamic difficulty buttons generated from configuration */}
        <div className="difficulty-buttons">
          {difficultyLevels.map(({ level, label, description, emoji, color }) => (
            <button
              key={level}                    // Unique key for React rendering
              onClick={() => setDifficulty(level)}  // Set difficulty when clicked
              className={`btn ${color} difficulty-btn`}  // Apply styling classes
            >
              <span className="difficulty-emoji">{emoji}</span>
              <div className="difficulty-content">
                <span className="difficulty-label">{label}</span>
                <span className="difficulty-description">{description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Start;
