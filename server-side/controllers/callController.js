const asyncHandler = require('express-async-handler')



const getCalls = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get calls" })
})


const setCalls = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: "Set calls" })
})


const updateCalls = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update calls ${req.params.id}` })
})


const deleteCalls = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete calls ${req.params.id}` })
})

module.exports = {
    getCalls,
    setCalls,
    updateCalls,
    deleteCalls
}