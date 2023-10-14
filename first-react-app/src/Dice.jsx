import React from 'react';

function Dice(props) {
    const ran = Math.floor(Math.random()*3) +1;
    const ran2 = Math.floor(Math.random()*3) +1;
    return (
        <div>
            {ran === ran2 ? <h1>You Win!!</h1> : null}
        </div>
    );
}

export default Dice;