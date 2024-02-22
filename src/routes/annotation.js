const express = require('express')
const { insert, find, update, deleteById, findByIdFolder } = require('../controllers/annotation')
const router = express.Router()
const Middeware = require('../middleware/login.middleware')

router.get('/annotation/:id', Middeware.required, find)
router.get('/annotations/:idFolder', Middeware.required, findByIdFolder)
router.post('/annotation', Middeware.required, insert)
router.patch('/annotation/:id', Middeware.required, update)
router.delete('/annotation/:id', Middeware.required, deleteById)

module.exports = router