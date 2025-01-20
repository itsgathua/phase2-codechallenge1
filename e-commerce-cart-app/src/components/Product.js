import React from "react";


const Product = ({ product, addToCart}) => {
    if (!product) return <p>Loading...</p>;

    return(
        <div>
            <li>
                <span>{product.name}</span> - <span>Ksh.{product.price}</span>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
            </li>
        </div>
    )
}

export default Product