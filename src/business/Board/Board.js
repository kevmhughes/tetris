import { defaultCell } from "../Cell/Cell.js";
import { transferToBoard } from "../Tetrominoes/Tetrominoes.js";

export const buildBoard = ({ rows, columns }) => {
  const builtRows = Array.from({ length: rows }, () => 
    Array.from({ length: columns }, () => ({ ...defaultCell }))
    );

    return {
      rows: builtRows,
      size: { rows, columns },
    };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player; 

  // Copy and clear spaces used by pieces that hadn't collided and occupied spaces permanently
  let rows = board.rows.map((row) => 
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape
  });

  return {
    rows,
    size: { ...board.size }
  };
};
