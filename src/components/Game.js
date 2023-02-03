import Menu from "./Menu.js"

import { useGameOver } from "../hooks/useGameOver.js"

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameover] = useGameOver();

    const start = () => {
        console.log(`start gameover is ${gameOver}`)
    }

    return (
        <div className="Game">
            <Menu onClick={start} />
        </div>
    );
};


export default Game;