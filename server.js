const express = require('express');
const path = require('path');
const app = express();
const contactRoute = require('./routes/contact'); // Route file

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mount the contact route
app.use('/api/contact', contactRoute);

// Serve frontend (catch-all)
app.use('/:category', (req, res) => {
  res.send(`Category: ${req.params.category}`);
});



app.listen(3000, () => console.log('Server running on http://localhost:3000'));
