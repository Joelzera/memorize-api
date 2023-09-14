const express = require('express')
const { getUsers, create, login, update, deleteById } = require('../controllers/user')
const router = express.Router()
const Middeware = require('../middleware/login.middleware')

router.get('/user/:id', getUsers)
router.post('/user', create)
router.post('/user/login', login)
router.put('/user/:id', Middeware.required, update)
router.delete('/user/:id', deleteById)

module.exports = router