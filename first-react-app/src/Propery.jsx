import React from 'react';

function Propery({name, rating, price, id}) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}⭐️</h4>
        </div>
    );
}

export default Propery;