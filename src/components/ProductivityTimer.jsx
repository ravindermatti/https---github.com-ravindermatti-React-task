
import React, { useState, useEffect } from "react";

const ProductivityTimer = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(15); // Work session duration (15 seconds)
  const [isBreak, setIsBreak] = useState(false); // Break state

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else if (!isBreak) {
        setIsBreak(true);
        setSecondsRemaining(5); // Break duration (5 seconds)
      } else {
        setSecondsRemaining(15); // Reset for next work session
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsRemaining, isBreak]);

  return (
    <div>
      <h2>Productivity Timer</h2>
      {isBreak ? (
        <p>Take a break! You have {secondsRemaining} seconds remaining.</p>
      ) : (
        <p>Focus time! You have {secondsRemaining} seconds remaining.</p>
      )}
      {/* Add buttons for Start, Pause, Reset functionalities later */}
    </div>
  );
};

export default ProductivityTimer;
