const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db'); // ✅ Import the database module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

 const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true, message: 'Message sent successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
