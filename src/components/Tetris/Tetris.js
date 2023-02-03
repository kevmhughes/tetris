import "./Tetris.css";

import Board from "../Board/Board.js"

import { useBoard } from "../../hooks/useBoard.js"

const Tetris = ({ rows, columns, setGameOver }) => {
   // const = [[]];

    return (
        <Board />
    )
}

export default Tetris;