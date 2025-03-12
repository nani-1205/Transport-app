const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const transportRoutes = require('./routes/transport'); // Import routes

const app = express();
const port = 3000;

// Handlebars setup
app.engine('handlebars', engine({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: 'main' // Use main.handlebars as the default layout
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/', transportRoutes); // Use the transport routes

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});