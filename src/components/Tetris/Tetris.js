import "./Tetris.css";

import Board from "../Board/Board.js";
import GameStats from "../GameStats/GameStats.js"
import Previews from "../Previews/Previews.js";

import { useBoard } from "../../hooks/useBoard.js";
import { useGameStats } from "../../hooks/useGameStats.js";
import { usePlayer } from "../../hooks/usePlayer/usePlayer.js";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
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
      <Board board={board}/>
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />  
      <GameController 
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setplayer={setPlayer}
        />     
    </div>
  )
};

export default Tetris;
