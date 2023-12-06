import { useState } from "react";

const ScoreKeeper = ({ numPlayers = 3, target = 3 }) => {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    // function incrementScore(idx) {
    //     // const newScores = { ...scores, p1Score: scores.p1Score + 1 };
    //     setScores((prevScores) => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1;
    //         return copy;
    //     });
    // }

    const incrementScore = (idx) => {
        // const newScores = { ...scores, p1Score: scores.p1Score + 1 };
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === idx) return score + 1;
                return score;
            });
        });
    };

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    };

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>
                            Player{idx + 1} : {score}
                            <button onClick={() => incrementScore(idx)}>
                                +1
                            </button>
                            {score >= target && "Winner!"}
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default ScoreKeeper;
