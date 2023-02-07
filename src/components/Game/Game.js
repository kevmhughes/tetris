import Menu from "../Menu/Menu.js";
import Tetris from "../Tetris/Tetris.js";
import "./Game.css"

import { useGameOver } from "../../hooks/useGameOver.js";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver(); 
    localStorage.getItem("LastTopScore")
  };

  return (
    <div className="Game">
      {gameOver ? (
        <div className="MenuContainer">   
          <Menu onClick={start} />
          <div className="Instructions">    
            <p><b>KEYS:</b></p>
            <p><b>arrow left:</b> move left</p>
            <p><b>arrow right:</b> move right</p>
            <p><b>arrow up:</b> rotate</p>
            <p><b>arrow down:</b> slow drop</p>
            <p><b>space bar:</b> fast drop</p>
            <p><b>q:</b> quit</p>
            <p><b>p:</b> pause</p>
          </div>
        </div>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
