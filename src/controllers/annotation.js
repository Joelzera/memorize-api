const db = require('../config/mongo.config')
const Annotation = require('../models/annotation')
const {v4: uuid4} = require('uuid')


exports.find = async (req, res) =>{
    try {
        const data = await Annotation.findOne( { id: req.params.id } )
        res.json(data)

    } catch (error) {
        res.status(500).json( {message: error.message} )
    }
}

exports.insert = async (req, res) =>{
    const data = new Annotation({
        id: uuid4(),
        idFolder: req.body.id,
        title: req.body.title,
        text: req.body.text,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    try {
        const dataSave = await data.save()
        res.status(200).json(dataSave)

    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

exports.update = async (req, res) =>{
    try {
        const id = req.params.id
        const updatedData = req.body
        const options = {new: true}

        const annotation = await Annotation.findOne({ id: id })
        const result = await Annotation.findByIdAndUpdate(annotation._id, updatedData, options)
       
        res.json(result)

    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

exports.deleteById = async (req, res) =>{
    try {
        const id = req.body.id
        const data = await Annotation.deleteOne({ id: req.params.id })

        res.send(`a anotação ${data} foi deletada`)
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}