const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/calls', require("./routes/callRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})

//git remote add origin https://github.com/Alabere-coder/MEAN-2-project.git
//git branch - M main
//git push - u origin main