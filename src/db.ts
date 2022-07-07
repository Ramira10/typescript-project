import mongoose from 'mongoose'
import config from './config'

(async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://admin:admin@cluster0.wjiyz.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Database is connected to: ', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()