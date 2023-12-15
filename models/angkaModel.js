const mongoose = require('mongoose')

const angkaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const Angka = mongoose.model('Angka', angkaSchema);

module.exports = Angka;