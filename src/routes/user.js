const express = require('express')
const { getUsers, create, update, deleteById } = require('../controllers/user')
const router = express.Router()


router.get('/user/:id', getUsers)
router.post('/user', create)
router.put('/user/:id', update)
router.delete('/user/:id', deleteById)

module.exports = router