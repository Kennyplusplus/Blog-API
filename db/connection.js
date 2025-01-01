require('dotenv').config();//Importing environment variables

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectDB = async()=>{
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("CONNECTED TO DATABASE!!!");
    } catch (error) {
        console.log(error.message); 
    }
}



module.exports = connectDB;
//Thanks to process.env.mongoURI, it isn't necessary to pass mongoURI as a parameter