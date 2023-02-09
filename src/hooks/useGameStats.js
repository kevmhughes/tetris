import { useState, useCallback } from "react";

const buildGameStats = () => ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0
})

export const useGameStats = () => {
    const [gameStats, setGameStats] = useState(buildGameStats());
    
    const addLinesCleared = useCallback((lines) => {
        setGameStats((previous) => {
            var addOn = 0;
            if (lines === 1 && previous.level === 1) {
                addOn = 100;
            } else if (lines === 2 && previous.level === 1) {
                addOn = 400;
            } else if (lines === 3 && previous.level === 1) {
                addOn = 900;
            } else if (lines === 4 && previous.level === 1) {
                addOn = 2000;
            } else if (lines === 1 && previous.level === 2) {
                addOn = 200;
            } else if (lines === 2 && previous.level === 2) {
                addOn = 800;
            } else if (lines === 3 && previous.level === 2) {
                addOn = 1800;
            } else if (lines === 4 && previous.level === 2) {
                addOn = 4000;
            } else if (lines === 1 && previous.level === 3) {
                addOn = 200;
            } else if (lines === 2 && previous.level === 3) {
                addOn = 800;
            } else if (lines === 3 && previous.level === 3) {
                addOn = 1800;
            } else if (lines === 4 && previous.level === 3) {
                addOn = 4000;
            } else if (lines === 1 && previous.level === 4) {
                addOn = 300;
            } else if (lines === 2 && previous.level === 4) {
                addOn = 1200;
            } else if (lines === 3 && previous.level === 4) {
                addOn = 2700;
            } else if (lines === 4 && previous.level === 4) {
                addOn = 6000;
            } else if (lines === 1 && previous.level === 5) {
                addOn = 300;
            } else if (lines === 2 && previous.level === 5) {
                addOn = 1200;
            } else if (lines === 3 && previous.level === 5) {
                addOn = 2700;
            } else if (lines === 4 && previous.level === 5) {
                addOn = 6000;
            } else if (lines === 1 && previous.level === 6) {
                addOn = 400;
            } else if (lines === 2 && previous.level === 6) {
                addOn = 1600;
            } else if (lines === 3 && previous.level === 6) {
                addOn = 3600;
            } else if (lines === 4 && previous.level === 6) {
                addOn = 8000;
            } else if (lines === 1 && previous.level === 7) {
                addOn = 400;
            } else if (lines === 2 && previous.level === 7) {
                addOn = 1600;
            } else if (lines === 3 && previous.level === 7) {
                addOn = 3600;
            } else if (lines === 4 && previous.level === 7) {
                addOn = 8000;
            } else if (lines === 1 && previous.level > 7) {
                addOn = 500;
            } else if (lines === 2 && previous.level > 7) {
                addOn = 2000;
            } else if (lines === 3 && previous.level > 7) {
                addOn = 4500;
            } else if (lines === 4 && previous.level > 7) {
                addOn = 10000;
            };
            const points = previous.points + addOn;
            var NewTopScore = points;
            if (NewTopScore > localStorage.getItem("LastTopScore")) {
                localStorage.setItem("LastTopScore", NewTopScore.toString())
            } else {
                NewTopScore = points
            }

            const { linesPerLevel } = previous;
            const newLinesCompleted = previous.linesCompleted + lines;
            const level = 
            newLinesCompleted >= linesPerLevel
                ? previous.level + 1
                : previous.level;
            const linesCompleted = newLinesCompleted % linesPerLevel;

            return {
                level,
                linesCompleted,
                linesPerLevel,
                points
            };
        }, []);
    }, []);
    return [gameStats, addLinesCleared]
}