const mongoose = require('mongoose');

const callSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Call', callSchema)