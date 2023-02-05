import { hasCollision, isWithinBoard } from "../Board/Board.js"
import { rotate } from "../Tetrominoes/Tetrominoes.js";
import { Action } from "../Input/Input.js";


const attemptRotation = ({ board, player, setPlayer }) => {
  const shape = rotate({
    piece: player.tetromino.shape,
    direction: 1
  });

  const position = player.position;
  const isValidRotation =
    isWithinBoard({ board, position, shape }) &&
    !hasCollision({ board, position, shape });

  if (isValidRotation) {
    setPlayer({
      ...player,
      tetromino: {
        ...player.tetromino,
        shape
      }
    });
  } else {
    return false;
  }
};

export const playerController = ({
    action,
    board,
    player,
    setPlayer,
    setGameOver
}) => {
 if (!action) return;

 if (action === Action.Rotate) {
    attemptRotation({ board, player, setPlayer })
 }
};