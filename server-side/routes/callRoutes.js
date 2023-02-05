const express = require('express');
const router = express.Router();
const { getCalls, setCalls, updateCalls, deleteCalls } = require("../controllers/callController.js")

const { protect } = require('../middleware/authMiddleware')

// saving some lines of code
router.route('/').get(protect, getCalls).post(protect, setCalls)
router.route('/:id').put(protect, updateCalls).delete(protect, deleteCalls)

// router.get('/', getCalls)

// router.post('/', setCalls)

// router.put('/:id', updateCalls)

// router.delete('/:id', deleteCalls)

module.exports = router;