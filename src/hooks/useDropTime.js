/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 100;

export const useDropTime = ({ gameStats }) => {
  const [dropTime, setDropTime] = useState(defaultDropTime);

  useEffect(() => {
    const speed = speedIncrement * (gameStats.level - 1);
    const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime);
    setDropTime(newDropTime);
  }, [gameStats.level, dropTime]);

  return [dropTime];
};
