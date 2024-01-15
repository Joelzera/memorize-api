const express = require('express')
const { insert, find, update, deleteById } = require('../controllers/annotation')
const router = express.Router()
const Middeware = require('../middleware/login.middleware')

router.get('/annotation/:id', Middeware.required, find)
router.post('/annotation', Middeware.required, insert)
router.patch('/annotation/:id', Middeware.required, update)
router.delete('/annotation/:id', Middeware.required, deleteById)

module.exports = router