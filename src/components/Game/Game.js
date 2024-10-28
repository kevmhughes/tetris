/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import Menu from "../Menu/Menu.js";
import Tetris from "../Tetris/Tetris.js";
import "./Game.css";
import { useState } from "react";
import { useGameOver } from "../../hooks/useGameOver.js";

import useSound from "use-sound";
import TetrisSound from "../../assets/tetris.mp3";
import on from "../../assets/on.png";
import off from "../../assets/off.png";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [isActive, setIsActive] = useState(true);

  const [play, { stop }] = useSound(TetrisSound, {
    loop: true,
    interrupt: true,
    volume: 0.1,
  });

  const start = () => {
    resetGameOver();
    localStorage.getItem("LastTopScore");
    play();
    setIsActive(false);
  };

  const handleStop = () => {
    stop();
    setIsActive((current) => !current);
  };

  const handlePlay = () => {
    play();
    setIsActive((current) => !current);
  };

  return (
    <div className="Game">
      {gameOver ? (
        <div className="MenuContainer">
          <Menu onClick={start} />
          <div className="Instructions">
            <p>
              <b>KEYS:</b>
            </p>
            <p>
              <b>arrow left:</b> move left
            </p>
            <p>
              <b>arrow right:</b> move right
            </p>
            <p>
              <b>arrow up:</b> rotate
            </p>
            <p>
              <b>arrow down:</b> slow drop
            </p>
            <p>
              <b>space bar:</b> fast drop
            </p>
            <p>
              <b>q:</b> quit
            </p>
            <div className="ButtonsInMenuContainer">
              <button
                className="ButtonsInMenu"
                style={{ display: isActive ? "none" : "" }}
                onClick={handleStop}
              >
                <img className="icons" src={off} alt="audio off" />
              </button>
              <button
                className="ButtonsInMenu"
                style={{ display: isActive ? "" : "none" }}
                onClick={handlePlay}
              >
                <img className="icons" src={on} alt="audio on" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="TetrisContainer">
          <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
          <button
            className="Buttons"
            style={{ display: isActive ? "none" : "" }}
            onClick={handleStop}
          >
            <img className="icons" src={off} alt="audio off" />
          </button>
          <button
            className="Buttons"
            style={{ display: isActive ? "" : "none" }}
            onClick={handlePlay}
          >
            <img className="icons" src={on} alt="audio on" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
