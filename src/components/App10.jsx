import React from 'react';
import { useState } from "react";
import "./App2.css";

export default function App10() {
   const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 45 },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 70 },
  ]);

  const [cart, setCart] = useState({});

  const handleAddToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] ? prevCart[id] + 1 : 1,
    }));
  };

  const handleIncrement = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => {
      const updated = { ...prevCart };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const overallTotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return total + product.price * qty;
  }, 0);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          <hr />
        </div>
      ))}

      <h2>My Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {Object.entries(cart).map(([id, quantity]) => {
            const product = products.find((p) => p.id === parseInt(id));
            const total = product.price * quantity;
            return (
              <li key={id}>
                {product.name} - ${product.price} &nbsp;
                <button onClick={() => handleDecrement(product.id)}>-</button>
                {quantity}
                <button onClick={() => handleIncrement(product.id)}>+</button>
                Total: ${total}
              </li>
            );
          })}
        </ul>
      )}
      {Object.keys(cart).length > 0 && (
        <h3>Overall Total: ${overallTotal}</h3>
      )}
    </div>
  )
}
