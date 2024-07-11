import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [restaurantId, setRestaurantId] = useState('');
  const [items, setItems] = useState('');

  const handleOrder = async () => {
    try {
      const response = await axios.post('https://yourapi.com/food-delivery/order', { restaurantId, items });
      console.log(response.data);
    } catch (error) {
      console.error('Order error', error);
    }
  };

  return (
    <div>
      <h2>Order Food</h2>
      <input type="text" placeholder="Restaurant ID" value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} />
      <input type="text" placeholder="Items" value={items} onChange={(e) => setItems(e.target.value)} />
      <button onClick={handleOrder}>Order</button>
    </div>
  );
};

export default Order;
