import { useEffect, useState } from "react";
import "../styles/score.css";

export default function Score({ score }) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <div className="score">
      <div>Score: {score}</div>
      <div>Best score: {bestScore}</div>
    </div>
  );
}
