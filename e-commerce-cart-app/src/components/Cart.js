import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, updateCart}) => {
    const calculateTotal = () => 
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    ;

    return (
        <div>
            <h3>Cart</h3>
            {cartItems.length === 0 ? 
            (<p>Your cart is empty</p>): (
                <ul>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} updateCart={updateCart} />
                    ))}
                </ul>
            )}
            <h3>Total = Ksh.{calculateTotal()}</h3>
        </div>
    )

}


export default Cart;