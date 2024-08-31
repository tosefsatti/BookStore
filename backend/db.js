import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.MONGODBURI;

const connectToMongo = () =>{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,        
        useUnifiedTopology: true, 
    }).then(() => {
        console.log('Connected to MongoDB successfully');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
}

export default connectToMongo;