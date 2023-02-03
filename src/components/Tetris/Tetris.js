import "./Tetris.css";

import Board from "../Board/Board.js";

import { useBoard } from "../../hooks/useBoard.js";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });

  return <Board board={board}/>;
};

export default Tetris;
