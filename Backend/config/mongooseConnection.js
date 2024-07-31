const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/F-mart'; 

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {

      useNewUrlParser: true, // Use the new MongoDB connection string parser
      useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process with failure
  }
};



module.exports = connectDB;