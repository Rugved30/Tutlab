const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        const dbConnection = await mongoose.connect('mongodb+srv://buzypuzy59:lD5n9PfPS9KGtPO4@cluster0.ole1y.mongodb.net/tutlab');
        console.log(`Database connected to ${dbConnection.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to the database",error);
        process.exit(1);
    }
};

module.exports = connectDB