const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/calls', require("./routes/callRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})