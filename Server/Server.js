const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan'); 
const connectDB = require('../db') // Corrected path if db.js is in the same folder as server.js

// Load environment variables
dotenv.config({ path: '../config.env' });

// Connect to the database
connectDB();

// Import transactions routes
const transactions = require('../routes/transactions'); // Corrected path if routes is in the same folder as server.js
const { default: mongoose } = require('mongoose');

const app = express();

// Middleware
app.use(express.json()); // To handle JSON body parsing

if(process.env.NODE_ENV === 'devlopment') {
  app.use(morgan('dev')); 
}

// Routes
app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*',(req, res) => res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')));
}



// Port setup
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV || 'production'} mode on port ${PORT}`.yellow.bold
  );
});
