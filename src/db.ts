import mongoose from 'mongoose'
import config from './config'
import dotenv from "dotenv"
dotenv.config();

(async () => {
    try {
        const db = await mongoose.connect(`${config.MONGODB_URL}`);
        console.log('Database is connected to: ', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()