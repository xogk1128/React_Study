import { useState } from "react";

function generateGameBoard() {
    console.log("Making The Initial Game Board");
    return Array(5000);
}

const Dumbo = () => {
    const [board, setBoard] = useState(generateGameBoard);
    return (
        <button onClick={() => setBoard("hello!")}>
            Click Me to Change State
        </button>
    );
};

export default Dumbo;
