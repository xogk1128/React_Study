import React from 'react';

function Slot({val1, val2, val3}) {
    const check = (val1 === val2 && val1 === val3)
    return (
        <div>
            <h1>{val1}{val2}{val3}</h1>
            <h2 style={{color : check ? "green": "red"}}>{check ? "You Win!" : "You lose"}</h2>
            { check ? <h3>congrats!!!</h3> : null}
        </div>
    );
}

export default Slot;