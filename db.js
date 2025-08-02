const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://portfolio_o5sn_user:bR8Qz4GNIaXcHPg3HHDG8Rx77xMNldGf@dpg-d26a7be3jp1c73cquqfg-a.oregon-postgres.render.com/portfolio_o5sn',
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then(() => console.log('PostgreSQL connected!'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = pool;
