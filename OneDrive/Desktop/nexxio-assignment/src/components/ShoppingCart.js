import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import '../styles/CartItem.css';

const ShoppingCart = () => {
  const { state } = useCart();
  const { cartItems } = state;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
