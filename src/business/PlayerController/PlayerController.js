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

export const movePlayer = ({ delta, position, shape, board }) => {
  const desiredNextPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column
  };

  const collided = hasCollision({
    board,
    position: desiredNextPosition,
    shape
  });

  const isOnBoard = isWithinBoard({
    board,
    position: desiredNextPosition,
    shape
  });

  // Is the tetromino on the board and not touching anything? Prevent move if not. 
  const preventMove = !isOnBoard || (isOnBoard && collided);
  const nextPosition = preventMove ? position : desiredNextPosition;

  const isMovingDown = delta.row > 0;
    // Stamps the tetromino on the board and creates new piece. 
  const isHit = isMovingDown && (collided || !isOnBoard);

  return { collided: isHit, nextPosition };
};

// Execute type of attempted movement
const attemptMovement = ({ 
  board, 
  action, 
  player, 
  setPlayer, 
  setGameOver 
}) => {
  const delta = { row: 0, column: 0};
  let isFastDropping = false;

  if (action === Action.FastDrop) {
    isFastDropping = true;
  } else if (action === Action.SlowDrop) {
    delta.row += 1;
  } else if (action === Action.Left) {
    delta.column -= 1;
  } else if (action === Action.Right) {
    delta.column += 1;
  }

  // Did we have a collision? Next position
  const { collided, nextPosition } = movePlayer({
    delta,
    position: player.position,
    shape: player.tetromino.shape,
    board
  });

  // Did we collide immediately? If so, game over! 
  const isGameOver = collided && player.position.row === 0;
  if (isGameOver) {
    setGameOver(isGameOver);
  }

  // update the player (4 x 4 grid)
  setPlayer({
    ...player,
    collided,
    isFastDropping,
    position: nextPosition
  });
};

// Create a tetromino action
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
 } else {
    attemptMovement({ board, player, setPlayer, action, setGameOver})
 }
};