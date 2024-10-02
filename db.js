const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB server');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;
