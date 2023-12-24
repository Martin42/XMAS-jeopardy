import React, { useState } from "react";

const PlayerScoreCard = ({ handleDeleteTeam, id }) => {
  const [score, setScore] = useState(0);

  const handlePositive = () => {
    setScore(score + 100);
  };

  const handleNegative = () => {
    if (score > 0) {
      setScore(score - 100);
    }
  };

  return (
    <div>
      <div>
        <p className="scoreLabel">Team {id}</p>
        <input type="text" placeholder="Team Name" />
      </div>

      <p className="score">{score}</p>
      <button type="button" onClick={handlePositive}>
        +
      </button>
      <button type="button" onClick={handleNegative}>
        -
      </button>

      <button type="button" onClick={() => handleDeleteTeam(id)}>
        Delete Team
      </button>
    </div>
  );
};

export default PlayerScoreCard;
