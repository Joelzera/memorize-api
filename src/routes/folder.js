const express = require('express')
const { insert, find, update, deleteById } = require('../controllers/folder')
const router = express.Router()


router.get('/folder/:id', find)
router.post('/folder', insert)
router.patch('/folder/:id' , update)
router.delete('/folder/:id', deleteById)

module.exports = router