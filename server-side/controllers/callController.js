const asyncHandler = require('express-async-handler')

const Call = require('../models/callModel')



const getCalls = asyncHandler(async (req, res) => {
    const calls = await Call.find()

    res.status(200).json(calls)
})


const setCalls = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const call = await Call.create({
        text: req.body.text,
    })

    res.status(200).json(call)
})


const updateCalls = asyncHandler(async (req, res) => {
    const call = await Call.findById(req.params.id)

    if (!call) {
        res.status(400)
        throw new Error({ message: 'Call not found' })
    }

    const updatedCalls = await Call.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCalls)
})


const deleteCalls = asyncHandler(async (req, res) => {
    const call = await Call.findById(req.params.id)

    if (!call) {
        res.status(400)
        throw new Error({ message: 'Call not found' })
    }

    const deletedCalls = await Call.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getCalls,
    setCalls,
    updateCalls,
    deleteCalls
}