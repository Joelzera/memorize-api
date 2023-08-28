const express = require('express')
const { getUsers, create, login, update, deleteById } = require('../controllers/user')
const router = express.Router()


router.get('/user/:id', getUsers)
router.post('/user', create)
router.post('/user/login', login)
router.put('/user/:id', update)
router.delete('/user/:id', deleteById)

module.exports = router