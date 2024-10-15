// src/components/RestaurantDetail.js

import React from 'react';
import FoodItem from './FoodItem';


const RestaurantDetail = ({ restaurant, onClose, onAddItem }) => {
    return (
        <div style={styles.detailContainer}>
            <button onClick={onClose} style={styles.closeButton}>Close</button>
            <h2>{restaurant.Name}</h2>
            <img src={restaurant.imageUrl} alt={restaurant.Name} style={styles.image} />
            <p>Rating: {restaurant.rating}</p>

            <h3>Food Menu</h3>
            {restaurant.foodItems.map((food) => (
                <FoodItem key={food.foodName} food={food} onAdd={onAddItem} />
            ))}
        </div>
    );
};


const styles = {
    detailContainer: {
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        margin: '20px',
        backgroundColor: '#fff',
    },
    closeButton: {
        marginBottom: '20px',
    },
    image: {
        width: '300px',
        height: '200px',
        objectFit: 'cover',
    },
};





