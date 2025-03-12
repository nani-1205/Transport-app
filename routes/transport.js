const express = require('express');
const router = express.Router();
const transportData = require('../data/transport_data.json'); // Import data

// Home route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Transport App',
    transportOptions: transportData.transportOptions,
    style: 'style.css' // Link to CSS
  });
});

// Route to display details for a specific transport option
router.get('/transport/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get ID from URL params
  const transport = transportData.transportOptions.find(t => t.id === id);

  if (!transport) {
    return res.status(404).send('Transport option not found');
  }

  res.render('transport_details', {
    title: `Transport Details: ${transport.name}`,
    transport: transport,
    style: 'style.css'
  });
});

module.exports = router;