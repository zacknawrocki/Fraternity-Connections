const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    // Consider failed connections
      // Success
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
      // Failure
    } catch(err) {
        console.error(err.message);
        // End process
        process.exit(1);
    }
}

module.exports = connectDB;