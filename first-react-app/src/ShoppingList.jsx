import React from 'react';
import ShoppingListItem from './ShoppingListItem'

function ShoppingList({items}) {
    return (
        <ul>
            {items.map((i)=> (
                <ShoppingListItem 
                key={i.id}
                // item={i.item}
                // quantity={i.quantity}
                // completed={i.completed}
                {...i}
                />
            ))}
        </ul>
    );
}

export default ShoppingList;

// const data = [
//     { item : 'egg', quantity : 12, completed : false},
//     { item : 'milk', quantity : 1, completed : true},
//     { item : 'chicken breast', quantity : 4, completed : false},
//     { item : 'carrots', quantity : 6, completed : true},
//   ]