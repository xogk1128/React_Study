import React from 'react';
import "./Toggler.css"
import { useState } from 'react';

function Toggler(props) {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return (
        <p className='Toggler' onClick={toggleIsHappy}>
            {isHappy ? "😄" : "😭"}
            </p>
    );
}

export default Toggler;