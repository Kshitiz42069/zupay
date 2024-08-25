import mongoose from "mongoose";

const connectToDB = async() =>{
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log('database is connected');
    } catch (error) {
        console.log('error in the database connection');
    }
}

export default connectToDB;