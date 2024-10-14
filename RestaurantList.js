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

   
