require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./db'); // Import the DB connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Example API to check DB connection
app.get('/test-db', (req, res) => {
  connection.query('SELECT NOW() AS time', (err, results) => {
    if (err) {
      console.error('DB query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ serverTime: results[0].time });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

