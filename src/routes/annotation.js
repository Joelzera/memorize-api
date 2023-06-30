const express = require('express')
const { insert, find, update, deleteById } = require('../controllers/annotation')
const router = express.Router()


router.get('/annotation/:id', find)
router.post('/annotation', insert)
router.patch('/annotation/:id', update)
router.delete('/annotation/:id', deleteById)

module.exports = router