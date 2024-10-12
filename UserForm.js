// src/components/UserForm.js


import React from 'react';


const UserForm = () => {
    // Simple User Form (could be expanded)
    return (
        <form>
            <input type="text" placeholder="Enter your name" style={styles.input} />
            <input type="text" placeholder="Enter your address" style={styles.input} />
        </form>
    );
};


const styles = {
    input: {
        width: '100%',
       
    },
};


export default UserForm;
