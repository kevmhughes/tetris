/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import "./styles.css";
import Game from "./components/Game/Game.js";
import tetris from "./assets/tetris.png";

export default function App() {
  return (
    <div className="App">
      <img className="TetrisLogo" src={tetris} alt="tetris logo" />
      <div className="HiddenMessage">FOR DESKTOP ONLY</div>
      <Game rows={20} columns={10} />
    </div>
  );
}
