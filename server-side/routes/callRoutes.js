const express = require('express');
const router = express.Router();
const { getCalls, setCalls, updateCalls, deleteCalls } = require("../controllers/callController.js")

// saving some lines of code
router.route('/').get(getCalls).post(setCalls)
router.route('/:id').put(updateCalls).delete(deleteCalls)

// router.get('/', getCalls)

// router.post('/', setCalls)

// router.put('/:id', updateCalls)

// router.delete('/:id', deleteCalls)

module.exports = router;