import React, { useState } from "react";
import PlayerScoreCard from "./playerScoreCard";
import "../../styles/Score.css";

const PlayerScore = () => {
  const [teams, setTeams] = useState([]);

  const handleNewTeam = () => {
    setTeams((prevTeams) => [...prevTeams, prevTeams.length + 1]);
  };

  const handleDeleteTeam = (id) => {
    setTeams((prevTeams) => prevTeams.filter((teamId) => teamId !== id));
  };

  return (
    <div className="scoreBox">
      <p className="scoreTitle">Team Managment</p>
      {teams.map((id) => (
        <PlayerScoreCard key={id} id={id} handleDeleteTeam={handleDeleteTeam} />
      ))}
      <button type="button" onClick={handleNewTeam}>
        Add a new team
      </button>
    </div>
  );
};

export default PlayerScore;
