import React from 'react';
import './ColorBox.css'
import { useState } from 'react';

function randomChoice(arr){
    const idx =  Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function ColorBox({colors}) {
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    }
    return (
        <div onClick={changeColor} className='colorBox' style={{backgroundColor : color}}>
            
        </div>
    );
}

export default ColorBox;