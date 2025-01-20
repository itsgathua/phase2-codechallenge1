import React from "react";

const CartItem = ({ item, updateCart}) => {
    return(
        <li>
            {item.name} - X {" "}{item.quantity}
            <button onClick={() => updateCart(item.id, 'increase')}>Add</button>
            <button onClick={() => updateCart(item.id, 'decrease')}>Reduce</button>
            <button onClick={() => updateCart(item.id, 'remove')}>Remove</button>
        </li>
    )
}

export default CartItem;