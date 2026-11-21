
import { useState, useEffect } from 'react';

function FocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

  const handleStart = () => {
    if (seconds > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(25 * 60);
  };

  return (
    <div className="card timer-card">
      <p>Focus session ☁️</p>

      <h2>{formattedTime}</h2>

      <div className="timer-controls">
        {!isRunning ? (
          <button onClick={handleStart}>
            Start
          </button>
        ) : (
          <button onClick={handlePause}>
            Pause
          </button>
        )}

        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <span className="timer-message">
        {isRunning ? 'you are doing great ♡' : 'take a moment for yourself'}
      </span>
    </div>
  );
}

export default FocusTimer;