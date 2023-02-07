import "./Tetris.css";

import Board from "../Board/Board.js";
import GameStats from "../GameStats/GameStats.js"
import Previews from "../Previews/Previews.js";
import GameController from "../GameController/GameController";

import { useBoard } from "../../hooks/useBoard.js";
import { useGameStats } from "../../hooks/useGameStats.js";
import { usePlayer } from "../../hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  // The player is the grid in which the tetromino piece sits
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({ 
    rows, 
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
        <Board board={board} />
      <div className="SidePanel" style={{display: "flex"}}>
          <div className="PreviewContainer">
              <Previews tetrominoes={player.tetrominoes} />  
            </div>
          <GameStats gameStats={gameStats} />
          </div>
      <GameController 
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
        />     
    </div>
  )
};

export default Tetris;
