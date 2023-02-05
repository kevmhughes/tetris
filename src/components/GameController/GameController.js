import "./GameController.css"

import { Action, actionForKey } from "../../business/Input/Input.js"


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
        console.log(`onKeyDown ${code}`)
    }

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