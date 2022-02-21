const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Politician = new Schema(
    {
        nombre: { type: String, required: true },
        apelido: { type: String, required: true },
        partido: { type: [String], required: true },
        salarioAnual: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('politicians', Politician)