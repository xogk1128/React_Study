import React from 'react';
import Propery from './Propery';

function PropertyList({properties}) {
    return (
        <div style={ {display : "flex", listStyle : "none" }}>
            {properties.map((p) => (
                <Propery
                    {...p}
                    key={p.id}
                />)
            )}
            
        </div>
    );
}

export default PropertyList;