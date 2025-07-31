const { Pool } = require('pg');
require('dotenv').config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: false, // ✅ Required for Render PostgreSQL
  },
});

db.connect()
  .then(() => console.log('✅ Connected to PostgreSQL database.'))
  .catch((err) => console.error('❌ PostgreSQL connection failed:', err));

module.exports = db;
