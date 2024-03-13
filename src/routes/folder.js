const express = require('express')
const { insert, find, update, deleteById, findByIdProject } = require('../controllers/folder')
const router = express.Router()
const Middeware = require('../middleware/login.middleware')

router.get('/folder/:id', Middeware.required, find)
router.get('/folders/:idProject', Middeware.required, findByIdProject)
router.post('/folder', Middeware.required, insert)
router.patch('/folder/:id' , Middeware.required, update)
router.delete('/folder/:id', Middeware.required, deleteById)

module.exports = router