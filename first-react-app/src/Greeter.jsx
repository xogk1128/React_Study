import React from 'react';

function Greeter(props) {
    const name = props.person
    return (
        <div>
            Hi there!! {name}
        </div>
    );
}

export default Greeter;