// src/components/FoodItem.js


import React, { useState } from 'react';

const FoodItem = ({ food, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };
