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

  

