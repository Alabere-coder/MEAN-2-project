const mongoose = require('mongoose');
const { connect } = require('../routes/callRoutes');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        // console.log(`MongoDB Connnected: ${conn.connection.host}`)
        console.log('db connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB