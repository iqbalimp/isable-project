const mongoose = require('mongoose')

const abjadSchema = mongoose.Schema(
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


const Abjad = mongoose.model('Abjad', abjadSchema);

module.exports = Abjad;