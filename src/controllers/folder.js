const db = require('../config/mongo.config')
const Folder = require('../models/folder')
const {v4: uuid4} = require('uuid')


exports.find = async (req, res) =>{
    try {
        const data = await Folder.findOne({ id: req.params.id })
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.findByIdUser = async (req, res) =>{
    try {
        const data = await Folder.find({ idUser: req.params.idUser })
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.insert = async (req, res) => {
    const data = new Folder({
        id: uuid4(),
        idUser: req.body.idUser,
        annotationIds: [],
        name: req.body.name,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }) 
    try {
        const dataSave = await data.save();
        res.status(200).json(dataSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.update = async (req, res) =>{
    try {
        const id = req.params.id
        const updatedData = req.body

        const result = await Folder.updateOne({ id: id }, updatedData)
        if (!result.acknowledged) {
            res.status(409).json({message: 'verifique se os dados estão corretos!'})
        }
        res.json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteById = async (req, res) =>{
    try {
        const id = req.params.id
        const data = await Folder.deleteOne({ id: req.params.id })
        
        res.send(`O documento ${data.name} foi deletado com sucesso`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}