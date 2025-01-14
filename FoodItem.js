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

const styles = {
    foodItemContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '8px',
    },

    foodImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginRight: '10px',
    },

    foodDetails: {
        flex: 1,
        textAlign: 'left',
    },
    rating: {
        margin: '5px 0',
    },
    quantityControl: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
    },
    controlButton: {
        padding: '5px 10px',
        borderRadius: '5px',
    },
    quantity: {
        margin: '0 10px',
        fontSize: '18px',
    },

    addButton: {
        padding: '5px 10px',
        borderRadius: '5px',
    },
};


export default FoodItem;
