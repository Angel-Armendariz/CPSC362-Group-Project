import React, { useState } from 'react';
import './Cart.css';
import '../../Components/Catalog/catalog.jsx';
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 2, name: 'Item 2', price: 19.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 5.99, quantity: 4 }
  ]);
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  const calculateEstimatedTaxes = () => {
    const TAX_RATE = 0.08; // 8% tax rate
    return (calculateSubtotal() * TAX_RATE).toFixed(2);
  };

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + parseFloat(calculateEstimatedTaxes()) + parseFloat(calculateShipping())).toFixed(2);
  };

  const calculateShipping = () => {
    const SHIPPING_RATE = 2.99; // flat shipping rate per order
    return SHIPPING_RATE.toFixed(2);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={event => handleQuantityChange(item.id, event.target.value)}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <div>
          <p>Subtotal: ${calculateSubtotal()}</p>
          <p>Estimated Taxes: ${calculateEstimatedTaxes()}</p>
          <p>Shipping: ${calculateShipping()}</p>
        </div>
        <div>
          <h2>Total: ${calculateTotal()}</h2>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;