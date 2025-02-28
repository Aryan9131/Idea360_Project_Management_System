const mongoose = require('mongoose');

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://aryannayak9131:6GSjEXndyWm3jpaE@cluster0.iky3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



// Mongoose connection function
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB Atlas successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectToMongoDB;
