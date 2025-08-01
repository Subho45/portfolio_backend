const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.dpg-d26a7be3jp1c73cquqfg-a,
  user: process.env.portfolio_o5sn_user,
  password: process.env.bR8Qz4GNIaXcHPg3HHDG8Rx77xMNldGf,
  database: process.env.portfolio_o5sn,
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected!');
});

module.exports = db;
