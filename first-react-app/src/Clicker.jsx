import React from 'react';

function Clicker({message, buttonText}) {
    const handleClick = () => {
        alert({message})
    }
    return (
        <div>
            <p>Clcik the button!!</p>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default Clicker;