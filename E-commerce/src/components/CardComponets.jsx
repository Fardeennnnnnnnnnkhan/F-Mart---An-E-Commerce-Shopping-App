import React, { useContext } from 'react';
import ShopContext from './ShopContext';
import { FaTrash } from 'react-icons/fa'; // You can use any icon library

const CartComponent = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between mb-2">
              <div>
                <p className="text-lg">{item.name}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
                <p className="text-sm">{item.price} each</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartComponent;
