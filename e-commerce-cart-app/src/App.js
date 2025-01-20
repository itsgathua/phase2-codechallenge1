import React from 'react';
import products from './products'
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h2>E-Commerce Cart</h2>
      <ul>
        {products.map((product) => (
          <li key = {products.id}>
            {products.name} - Ksh.{products.price}
          </li>
        ))}
      </ul>
 
 
    </div>
  );
}

export default App;