const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    id: { type: String },
    idProject: { type: String },
    name: { type: String },
    annotationIds: { type: [String] },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})


module.exports = mongoose.model('Folder', dataSchema)