const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'switchyard.proxy.rlwy.net',
  port: 47326,
  user: 'root',
  password: 'ZaWrQhwChxMXvMMYqqlNEBhTplRbnvXS',
  database: 'railway'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to Railway MySQL!');
});
