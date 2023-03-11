import React, { useState } from 'react';
import './catalog.css';
import '../../pages/Cart/Cart.js';
const Catalog = ({ items, header }) => {
  return (
    <div className="catalog-container">
      <h1 className='pageName'>{header}</h1>
      <div className="item-list">
        {items.map(item => (
          <div className='catalog-item-container' key={item.id} >
            <a href={item.path}>
              <img className="catalog-item" src={item.image} alt={item.title} />
            </a>
            <h2 className='catalog-item-name'>{item.title}</h2>
            <h3 className='catalog-item-price'>{item.price}</h3>
            <CartItemButton />
          </div>
        ))}
      </div>
    </div>
  );
};

const CartItemButton = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="catalog-item-button">
      {quantity === 0 ? (
        <button onClick={incrementQuantity}>Add to Cart</button>
      ) : (
        <>
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </>
      )}
    </div>
  );
};


export default Catalog;


