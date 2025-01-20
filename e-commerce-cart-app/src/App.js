import React, { useState } from 'react';
import products from "./products";
import Cart from './components/Cart';
import "./style.css"
import ProductList from './components/ProductsList';

function App() {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) => item.id === product.id ?
      {...item, quantity:item.quantity + 1} : item)
      } else{
        return [...prevItems, {...product, quantity:1}];
      }
    })
  }

  const updateCart = (id, action) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if(item.id === id) {
          if (action === "increase") return { ...item, quantity: item.quantity + 1 };
          if (action === "decrease" && item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
          if (action === 'remove') return null;
        } return item;
      })
      .filter((item) => item !== null)
    })
  }

  return (
    <div className="App">
     <h2>E-commerce Cart</h2>
     <ProductList products={products} addToCart={addToCart} />
     <Cart cartItems={cartItems} updateCart={updateCart} />
    </div>
  );
}

export default App;