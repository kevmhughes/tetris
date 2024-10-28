/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */

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
    if (delay !== null) {
      function tick() {
        // fixes problem with autofocus when clicking on the screen during an active game but not when paused
        const gameControllerInput = document.querySelector(".GameController");
        gameControllerInput?.focus();

        savedCallback.current();
      }

      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]); // Include delay in the dependency array
};
