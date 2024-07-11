import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://yourapi.com/food-delivery/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Fetch restaurants error', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
