/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */

import "./GameController.css";
import { Action, actionForKey, actionIsDrop } from "../../business/Input.js";
import { playerController } from "../../business/PlayerController.js";

import { useDropTime } from "../../hooks/useDropTime.js";
import { useInterval } from "../../hooks/useInterval.js";

const GameController = ({ board, gameStats, player, setGameOver, setPlayer }) => {
  const [dropTime] = useDropTime({ gameStats });

  // Use the interval hook and handle the drop action when the interval triggers
  useInterval(
    () => {
      handleInput({ action: Action.SlowDrop });
    },
    dropTime !== null ? dropTime : null
  );

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action));
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action));
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
     />
  );
};

export default GameController;
