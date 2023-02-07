import Menu from "../Menu/Menu.js";
import Tetris from "../Tetris/Tetris.js";

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
        <div style={{    display: "flex",
          flexDirection: "column",
          alignItems: "center",}}>   
          <Menu onClick={start} />
          <div className="Instructions" style={{background: "rgb(100, 100, 100, 0.2)",
    fontSize: "20px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "20px",
    position: "absolute",
    bottom: "400px",}}>    
            <p>KEYS:</p>
            <p>arrow left: move left</p>
            <p>arrow right: move right</p>
            <p>arrow up: rotate</p>
            <p>arrow down: slow drop</p>
            <p>space bar: fast drop</p>
            <p>q: quit</p>
            <p>p: pause</p>
          </div>
        </div>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
