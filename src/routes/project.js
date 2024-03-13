const express = require('express')
const { insert, find, findByIdUser, update, deleteById } = require('../controllers/project')
const router = express.Router()
const Middeware = require('../middleware/login.middleware')

router.get('/project/:id', Middeware.required, find)
router.get('/projects/:idUser', Middeware.required, findByIdUser)
router.post('/project', Middeware.required, insert)
router.patch('/project/:id' , Middeware.required, update)
router.delete('/project/:id', Middeware.required, deleteById)

module.exports = router