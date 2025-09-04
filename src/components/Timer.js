import React, { useEffect, useState } from "react";

/**
 * Timer Component - Countdown timer for quiz questions
 * 
 * This component provides a visual countdown timer that automatically
 * triggers the onTimeUp callback when the timer reaches zero. It uses
 * React hooks to manage the timer state and cleanup.
 * 
 * @param {number} duration - Initial time in seconds for the countdown
 * @param {Function} onTimeUp - Callback function called when timer reaches zero
 */
function Timer({ duration, onTimeUp }) {
  // State to track remaining time
  const [time, setTime] = useState(duration);

  // Effect hook to handle countdown logic
  useEffect(() => {
    // If time reaches zero, trigger the callback and exit
    if (time === 0) {
      onTimeUp();
      return;
    }
    
    // Set up a timeout to decrement the timer every second
    const timer = setTimeout(() => setTime(time - 1), 1000);
    
    // Cleanup function to clear the timeout when component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [time, onTimeUp]); // Dependencies: re-run when time or onTimeUp changes

  // Render the timer display with remaining time
  return <div className="timer">Time Left: {time}s</div>;
}

export default Timer;
