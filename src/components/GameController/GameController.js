import "./GameController.css"

import { Action, actionForKey } from "../../business/Input/Input.js"
import { playerController } from "../../business/PlayerController/PlayerController.js"

//import { useInterval } from "../../hooks/useInterval.js"

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) => {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Quit) {
            setGameOver(true)
        }
    };

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);
        handleInput({ action });
    }

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    };

    return (
        <input 
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
            >
        </input>
    )

}

export default GameController;