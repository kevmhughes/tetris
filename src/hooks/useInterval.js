import { useEffect, useRef } from "react";

// Custom hook by Dan Abramov
export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up interval
    useEffect(() => {
        function tick() {
            // fixes problem with autofocus when clicking on the screen during an active game but not when paused
            const gameControllerInput = document.querySelector(".GameController");
            gameControllerInput.focus();
           
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id)
            };
        }
    }, [delay]);
};