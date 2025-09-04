import React from "react";

/**
 * Question Component - Displays individual quiz questions and answer options
 * 
 * This component renders a single question with its multiple choice options.
 * It handles user selection and provides visual feedback for the selected answer.
 * The question text supports HTML formatting for special characters and formatting.
 * 
 * @param {Object} data - Question data object containing:
 *   @param {string} data.question - The question text (may contain HTML)
 *   @param {Array} data.options - Array of answer options
 *   @param {number} data.answer - Index of the correct answer
 * @param {number|null} selected - Index of currently selected option (null if none selected)
 * @param {Function} setSelected - Function to update the selected answer index
 */
function Question({ data, selected, setSelected }) {
  return (
    <div className="question-card">
      {/* Question text with HTML support for special characters */}
      <p dangerouslySetInnerHTML={{ __html: data.question }} />
      
      {/* Render each answer option as a clickable button */}
      {data.options.map((option, index) => (
        <button
          key={index}                                    // Unique key for React rendering
          className={`option-btn ${selected === index ? "selected" : ""}`}  // Apply selected styling
          onClick={() => setSelected(index)}             // Handle option selection
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
