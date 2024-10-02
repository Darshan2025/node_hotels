const express = require('express');
const mongoose = require('mongoose'); // Ensure mongoose is imported if not done in db.js
const app = express();
const db = require('./db'); // This file should handle your MongoDB connection

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.send('Welcome to my hotel');
});


              
// Import the router files

const personRoutes = require('./Routes/personRoutes');
const menuItemRoutes = require('./Routes/menuItemRoutes');

console.log("personRoutes:", personRoutes);
console.log("menuItemRoutes:", menuItemRoutes);


// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Gracefully handle shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close(); // Close the MongoDB connection
    console.log('Disconnected from MongoDB server');
    process.exit(0); // Exit the process
});



