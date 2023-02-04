import { useState, useEffect } from "react";

import { buildBoard, nextBoard } from "../business/Board/Board.js"

export const useBoard = ({ 
  rows, 
  columns, 
  player, 
  resetplayer, 
  addLinesCleared 
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) => 
      nextBoard({
        board: previousBoard,
        player,
        resetplayer,
        addLinesCleared
      })
    );
  }, [player, resetplayer, addLinesCleared])

 return [board] 
};
