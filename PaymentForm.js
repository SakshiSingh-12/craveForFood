// src/components/PaymentForm.js


import React from 'react';


const PaymentForm = ({ amount }) => {
    const handlePayment = () => {
        alert(`Processing payment of $${amount}`);
    };
