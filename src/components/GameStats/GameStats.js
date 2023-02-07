import React from "react";
import "./GameStats.css"

const GameStats = ({ gameStats }) => {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <ul className="GameStats GameStats__right">
            <li style={{color: "rgb(102 102 3)"}}>High Score</li>
            <li className="value" style={{color: "gold"}}>{localStorage.getItem("LastTopScore")}</li>
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
