/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  const TopScore = localStorage.getItem("LastTopScore");

  return (
    <ul className="GameStats GameStats__right">
      <li style={{ color: "rgb(102 102 3)" }}>High Score</li>
      <li className="value" style={{ color: "gold" }}>
        {TopScore ? TopScore : "0"}
      </li>
      <li>Level</li>
      <li className="value">{level}</li>
      <li>Lines to Level</li>
      <li className="value">{linesToLevel}</li>
      <li>Score</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
