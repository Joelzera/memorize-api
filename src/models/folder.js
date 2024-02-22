const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    id: { type: String },
    idUser: { type: Number },
    name: { type: String },
    annotationIds: { type: [String] },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})


module.exports = mongoose.model('Folder', dataSchema)