import mongoose from 'mongoose'
import config from './config'
require('dotenv').config()

(async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log('Database is connected to: ', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()