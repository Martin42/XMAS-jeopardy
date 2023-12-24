import React, { useState } from "react";

const PlayerScoreCard = ({ handleDeleteTeam, id }) => {
  const [teamName, setTeamName] = useState("");
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
        <input
          type="text"
          className="input"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <p className="score">
          <b>{score}</b>
        </p>
        <div className="scoreDiv">
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
      </div>
    </div>
  );
};

export default PlayerScoreCard;
