import "./styles.css";
import Game from "./components/Game/Game.js";
import tetris from "./assets/tetris.png";

export default function App() {
  return (
    <div className="App">
        <img src={tetris} alt="tetris logo"/>
      <Game rows={20} columns={10} />
    </div>
  );
}
