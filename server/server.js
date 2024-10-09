// server.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Replace with your MySQL password
    database: 'craveForFood',
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// API endpoint to get all restaurants
app.get('/api/restaurants', (req, res) => {
    db.query('SELECT * FROM restaurants', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// API endpoint to get food items by restaurant ID
app.get('/api/restaurants/:id/food_items', (req, res) => {
    const restaurantId = req.params.id;
    db.query('SELECT * FROM food_items WHERE RestaurantID = ?', [restaurantId], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
