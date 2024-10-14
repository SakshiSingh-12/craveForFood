// src/components/RestaurantList.js

import React, { useState } from 'react';
import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ restaurants, onAddItem }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleRestaurantClick = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    const handleCloseDetail = () => {
        setSelectedRestaurant(null);
    };

  return (
        <div>
            <h2>Restaurants</h2>
            {selectedRestaurant ? (
                <RestaurantDetail 
                    restaurant={selectedRestaurant} 
                    onClose={handleCloseDetail} 
                    onAddItem={onAddItem} // Pass the add item function
                />
            ) : (
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.RestaurantID} onClick={() => handleRestaurantClick(restaurant)} style={{ cursor: 'pointer' }}>
                            {restaurant.Name} - {restaurant.CuisineType}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RestaurantList;

  
