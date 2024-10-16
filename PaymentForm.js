// src/components/PaymentForm.js


import React from 'react';


const PaymentForm = ({ amount }) => {
    const handlePayment = () => {
        alert(`Processing payment of $${amount}`);
    };

    return (
        <div>
            <h3>Payment</h3>
            <p>Total Amount: ${amount}</p>
            <button onClick={handlePayment} style={styles.paymentButton}>Pay Now</button>
        </div>
    );
};

