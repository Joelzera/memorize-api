const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    id: { type: String },
    idFolder: { type: String },
    title: { type: String },
    text: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})


module.exports = mongoose.model('Annotation', dataSchema)