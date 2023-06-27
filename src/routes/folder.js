const express = require('express')
const router = express.Router()


router.get('/folder/:id', (req, res) => {
    console.log('folder')
    res.send(req.params.id)
})

router.post('/folder', (req, res) =>{
    res.send('metodo post')
})

router.patch('/folder' , (req, res) =>{
    res.send('metodo de update')
})

router.delete('/folder/:id', (req, res) =>{
    res.send('metodo de deletar')
})

module.exports = router