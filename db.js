const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
async function connectDb() {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error("Connection to mongodb failed", error.message);
        process.exit(1); //Exit process with failure
    }
}

module.exports = connectDb();