import React from 'react';
import { useState, useEffect } from "react";
import "./App19.css";

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (wickets >= 10) {
      setMessage("Game Over");
    }
  }, [wickets]);

  const handleRun = () => {
    if (wickets < 10) {
      setRuns((prev) => prev + 1);
      setMessage("Well done");
    }
  };

  const handleWicket = () => {
    if (wickets < 10) {
      setWickets((prev) => prev + 1);
      setMessage("Better luck next time");
    }
  };

  return (
    <div className="scoreboard-container">
       <h1 className="scoreboard-heading">Cricket Scoreboard</h1>
      <div className="scoreboard-boxes">
        <div className="scoreboard-box">
          <h2>Runs: {runs}</h2>
          <button onClick={handleRun}>Run</button>
          <br />
          <br />
          <h2>Wickets: {wickets}</h2>
          <button onClick={handleWicket}>Wicket</button>
        </div>
        <div className="scoreboard-box message-box">
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  )
}
