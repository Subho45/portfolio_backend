const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const db = require('./db'); // ✅ PostgreSQL db module

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow frontend to access backend (CORS for Netlify)
app.use(cors({
  origin: 'https://courageous-phoenix-366ea2.netlify.app/', // 🔁 Replace with your real frontend Netlify URL
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const query = 'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)';
    await db.query(query, [name, email, message]);

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ Database error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
