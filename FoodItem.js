// src/components/FoodItem.js


import React, { useState } from 'react';

const FoodItem = ({ food, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    
    const handleAddItem = () => {
        onAdd(food.foodName, quantity); // Notify parent component to add item
    };

    return (
        <div style={styles.foodItemContainer}>
            <img src={food.foodImage} alt={food.foodName} style={styles.foodImage} />
            <div style={styles.foodDetails}>
                <h4>{food.foodName}</h4>
                <div style={styles.rating}>Rating: {food.rating || 'N/A'}</div>
                <div style={styles.quantityControl}>
                    <button onClick={handleDecrease} style={styles.controlButton}>-</button>
                    <span style={styles.quantity}>{quantity}</span>
                    <button onClick={handleIncrease} style={styles.controlButton}>+</button>
                </div>
                <button onClick={handleAddItem} style={styles.addButton}>Add Item</button>
            </div>
        </div>
    );
};



