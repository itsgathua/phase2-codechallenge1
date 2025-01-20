import React from "react";
import Product from "./Product";



const ProductList = ({ products, addToCart}) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
      }
    
    return(
        <div>
            <h3>Products</h3>
            <ul>
                {products.map((product) => (
                    <Product 
                    key = {product.id}
                    product = {product}
                    addToCart = {addToCart}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ProductList